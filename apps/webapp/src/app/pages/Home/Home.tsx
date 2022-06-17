import { Planet, usePlanets } from '@nx-react-web-mobile/domain';
import { Images } from '@nx-react-web-mobile/ui-res';
import React from 'react';
import { useListPagination, usePlanetRows } from './Home.hooks';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [planets, loadNext] = usePlanets();

  const listRef = useListPagination({ loadNext });

  const rows = usePlanetRows({ planets });

  return (
    <div className={styles['container']} ref={listRef}>
      {rows.map((row, ri) => {
        return (
          <div key={`planet_row_${ri}`} className={styles['planetRow']}>
            {row.map((it) => (
              <PlanetItem key={it.name} planet={it} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export const PlanetItem: React.FC<{ planet: Planet }> = ({ planet }) => {
  const planetImageRes = planet.name
    .toLowerCase()
    .replace(/\s+/g, '_') as keyof typeof Images.planets;
  return (
    <div className={styles['planetItem']}>
      <img
        className={styles['planetItemImage']}
        src={Images.planets[planetImageRes]}
      />
      <div className={styles['planetItemName']}>{planet.name}</div>
    </div>
  );
};

export default Home;
