import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Tabs from './tabs'
import Colors from './src/utilitis/Colors';
//MaterialCommmunityIcons

const Home = ({navigation}) => {

  const searchRoute = () => <Tabs navigation={navigation}/>;
  const favoritesRoute = () => <Text>Favorites</Text>;
  const profileRoute = () => <Text>Profile</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'search', title: 'Busqueda', focusedIcon: 'doctor' },
    { key: 'favorites', title: 'Favorites', focusedIcon: 'star', unfocusedIcon: 'star-outline'},
    { key: 'profile', title: 'Perfil', focusedIcon: 'face-man-profile' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    search: searchRoute,
    favorites: favoritesRoute,
    profile: profileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: Colors.SECONDARY_BLUE }}
    />
  );
};

export default Home;