import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Tabs from './tabs'
import Colors from './src/utilitis/Colors';
import Agenda from './Agenda';
//MaterialCommmunityIcons

const Home = ({navigation}) => {

  const searchRoute = () => <Tabs navigation={navigation}/>;
  const favoritesRoute = () => <Text>Favorites</Text>;
  const agendaRoute = () => <Agenda/>

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'search', title: 'Busqueda', focusedIcon: 'text-search' },
    { key: 'favorites', title: 'Favorites', focusedIcon: 'star', unfocusedIcon: 'star-outline'},
    { key: 'agenda', title: 'Agenda', focusedIcon: 'calendar-weekend', unfocusedIcon: 'calendar-weekend-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    search: searchRoute,
    favorites: favoritesRoute,
    agenda: agendaRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: Colors.SECONDARY_BLUE}}
      activeColor= {Colors.SECONDARY_BLUE}
    />
  );
};

export default Home;