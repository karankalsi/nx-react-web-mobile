import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import { usePlanets } from '@nx-react-web-mobile/domain';
import { Planet } from 'libs/domain/src/lib/planets/planets.types';
import HomeStyles from './Home.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLANETS_COLUMN } from './Home.constants';
import { Spinner } from '@nx-react-web-mobile/ui-mobile';
import { Images } from '@nx-react-web-mobile/ui-res';

const Home: React.FC = () => {
  const {planets, loadNext, extraData} = usePlanets();
  const { loading } = extraData;
  return (
    <SafeAreaView style={HomeStyles.container}>
      <FlatList
        contentContainerStyle={HomeStyles.contentContainer}
        data={planets}
        numColumns={PLANETS_COLUMN}
        renderItem={renderPlanetItem}
        showsVerticalScrollIndicator={false}
        onEndReached={loadNext}
        ListEmptyComponent={() => <PlanetListPlaceholder loading={loading} />}
        ListFooterComponent={() => (
          <PlanetListFooter loading={loading} data={planets} />
        )}
      />
    </SafeAreaView>
  );
};

const renderPlanetItem: ListRenderItem<Planet> = ({ item }) => {
  return <PlanetItem planet={item} />;
};

const PlanetItem: React.FC<{ planet: Planet }> = React.memo(({ planet }) => {
  const planetImageRes = planet.name.toLowerCase().replace(/\s+/g, '_');

  return (
    <View style={HomeStyles.planetItem}>
      <View style={HomeStyles.planetItemImageContainer}>
        <Image
          style={HomeStyles.planetItemImage}
          source={Images.planets[planetImageRes]}
          resizeMode={'contain'}
        />
      </View>
      <Text style={HomeStyles.planetItemName}>{planet.name}</Text>
    </View>
  );
});

const PlanetListPlaceholder: React.FC<{ loading: boolean }> = React.memo(
  ({ loading }) => {
    if (loading) {
      return <Spinner fullScreenOverlay />;
    } else {
      return (
        <View style={HomeStyles.emptyListPlaceholder}>
          <Text style={HomeStyles.emptyListText}>No data found</Text>
        </View>
      );
    }
  }
);

const PlanetListFooter: React.FC<{ loading: boolean; data: Planet[] }> =
  React.memo(({ loading, data }) => {
    if (loading && data.length) {
      return (
        <View style={HomeStyles.spinnerFooter}>
          <Spinner />
        </View>
      );
    }

    return null;
  });

export default Home;
