import React from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { usePlanets } from '@nx-react-web-mobile/domain';
import { Planet } from 'libs/domain/src/lib/planets/planets.types';
import HomeStyles from './Home.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLANETS_COLUMN } from './Home.constants';

const Home: React.FC = () => {
  const [planets, loadNext] = usePlanets();
  return (
    <SafeAreaView style={HomeStyles.container}>
      <FlatList
        data={planets}
        numColumns={PLANETS_COLUMN}
        renderItem={renderPlanetItem}
        showsVerticalScrollIndicator={false}
        onEndReached={loadNext}
      />
    </SafeAreaView>
  );
};

const renderPlanetItem: ListRenderItem<Planet> = ({ item }) => {
  return <PlanetItem planet={item} />;
};

const PlanetItem: React.FC<{ planet: Planet }> = React.memo(({ planet }) => {
  return (
    <View style={HomeStyles.planetItem}>
      <Text>{planet.name}</Text>
    </View>
  );
});

export default Home;
