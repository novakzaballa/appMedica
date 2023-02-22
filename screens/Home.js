import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Tabs from './tabs'
import Colors from './src/utilitis/Colors';
import Agenda from './Agenda';
import Home2 from './MainHome';
//MaterialCommmunityIcons

const Home = ({navigation}) => {

  const HomeRoute = () => <Home2 navigation={navigation}/>
  const searchRoute = () => <Tabs navigation={navigation}/>;
  const favoritesRoute = () => <Text>Favorites</Text>;
  const agendaRoute = () => <Agenda/>

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'search', title: 'Busqueda', focusedIcon: 'text-search'},
    { key: 'favorites', title: 'Favoritos', focusedIcon: 'star', unfocusedIcon: 'star-outline'},
    { key: 'agenda', title: 'Agenda', focusedIcon: 'calendar-weekend', unfocusedIcon: 'calendar-weekend-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: searchRoute,
    favorites: favoritesRoute,
    agenda: agendaRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: Colors.OFF_WHITE}}
      activeColor= {Colors.SECONDARY_BLUE}
    />
  );
};

export default Home;