import React from 'react';
import { getPlanets, GetPlanetsResponseDTO } from '@nx-react-web-mobile/data';
import {
  Planet,
  UsePlanetsAction,
  UsePlanetsActionExtraData,
} from './planets.types';

export const usePlanets = (): UsePlanetsAction => {
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [planetsData, setPlanetsData] = React.useState<GetPlanetsResponseDTO>();
  const { results = [], count = 0, next } = planetsData || {};
  const planets: Planet[] = results.map((it) => ({ ...it }));

  const load = React.useRef((pg: number) => {
    setLoading(true);
    getPlanets(pg)
      .then((nd) => {
        setPage(pg);
        setLoading(false);
        setPlanetsData((d) => ({
          ...nd,
          results: [...(d?.results || []), ...nd.results],
        }));
      })
      .catch(setLoading.bind({}, false));
  }).current;

  const loadNext = React.useCallback(() => {
    if (next !== null && !loading) {
      const nextPage = page + 1;
      load(nextPage);
    }
  }, [next, loading, page]);

  const extraData: UsePlanetsActionExtraData = React.useMemo(
    () => ({
      count,
      hasNext: !!next,
      loading,
    }),
    [count, next, loading]
  );

  React.useEffect(() => {
    load(1);
    return () => {
      setPage(1);
      setPlanetsData(undefined);
      setLoading(false);
    };
  }, []);

  return [planets, loadNext, extraData];
};
