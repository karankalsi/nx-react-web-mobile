import { Planet } from '@nx-react-web-mobile/domain';
import React from 'react';

export const useListPagination = (params: {
  loadNext: () => void;
}): React.RefObject<HTMLDivElement> => {
  const { loadNext } = params;
  const listRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    let prevY: number;
    if (listRef.current) {
      const handleObserver: IntersectionObserverCallback = (entities) => {
        const y = entities[0].boundingClientRect.y;
        if (prevY !== y) {
          loadNext();
          prevY = y;
        }
      };
      const observer = new IntersectionObserver(handleObserver.bind(this), {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      });
      observer.observe(listRef.current);
    }
  }, [loadNext]);

  return listRef;
};

export const usePlanetRows = (params: { planets: Planet[] }): [Planet[]] => {
  const { planets } = params;

  const rows: [Planet[]] = planets.reduce(
    (acc, item, index) => {
      const rowIndex = Math.floor(index / 5);
      acc[rowIndex] = acc[rowIndex] ? acc[rowIndex] : [];
      acc[rowIndex].push(item);
      return acc;
    },
    [[]] as [Planet[]]
  );

  return rows;
};
