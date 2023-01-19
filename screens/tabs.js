import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, ScrollView, SegmentedButtons} from 'react-native';
import { Button, Modal, Portal, Searchbar, Text } from 'react-native-paper';
import { TabView } from 'react-native-tab-view';
import { AlphabetList } from "react-native-section-alphabet-list";
import { List, Avatar } from 'react-native-paper';
 
const FirstRoute = ({navigation}) => (
  <View style={[styles.scene, { backgroundColor: '#fff' }]}>
    <AlphabetList
      data={data}
      indexLetterStyle={{ 
        color: 'blue', 
        fontSize:15,
      }}
      renderCustomItem={(item) => (
        <List.Item
          title={item.value}
          right={props => <List.Icon {...props} icon={require('./src/usuario.png')}/>}
          onPress = {
            () =>{
                navigation.navigate('Profile')
            }
          } 
        />
      )}
    />
  </View>
);
const SecondRoute = ({navigation}) =>{
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 60};

  return(
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text variant="titleMedium">What does "Verified" Means?</Text>
          <Text variant="bodySmall">The verified icon means that our customer care staff, have thoroughly validated the identity, credentials, and location, of the doctor or health provider holding this account. Our company validates the above mentioned data when the health provider is registered in our platform for the first time, and once per year. </Text>
          <Button  mode="text" onPress={hideModal}>
            Got it
          </Button>
        </Modal>
      </Portal>
      <View style={styles.container2}>
        {<Avatar.Image size={100} source={require('./src/usuario.png')} style={styles.top}/>}
        <Text>Dr. Fernando Paniagua</Text>
        <Text>Dr. Paniagua has extensive experience in pediatrics. He coursed his major in UMSA, La Paz Bolivia, while completed his specialty in UNAM, Mexico D.F.</Text>
      </View>
      <Text>Today's availability</Text>
  
      <Button icon={require('./src/quality.png')} mode="text" onPress={showModal}>
        Verificado
      </Button>
    </View>
  );
} 

const ThirtRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );

  const data = [
    { value: 'Lillie-Mai Allen', key: 'lCUTs2' },
    { value: 'Emmanuel Goldstein', key: 'TXdL0c2' },
    { value: 'Emmanuel Goldstein', key: 'TXdLeav0c2' },

    { value: 'Emma Goldstein', key: 'TXzddL0c' },
    { value: 'Emma sol', key: 'TXdgL0c' },
    { value: 'Ester Soliz', key: 'TXdLsg0c' },
    { value: 'Emmanuel Goldstein', key: 'TXdLzx0c' },
    { value: 'Ernesto Gonzales', key: 'TXdLc0c' },

    { value: 'Winston Smith', key: 'zqsiEw' },
    { value: 'William Blazkowicz', key: 'psg2PM' },
    { value: 'Winston Smith', key: 'zqsiEw2' },
    { value: 'wally Smith', key: 'zqsiEw3' },
    { value: 'William Blazkowicz', key: 'psg2PM2' },
    { value: 'Winston Smith', key: 'zqsiEw4' },
    { value: 'William Blazkowicz', key: 'psg2PM3' },
    { value: 'Winston Smith', key: 'zqsiEw45' },
    { value: 'William Blazkowicz', key: 'psg2PM4' },
    { value: 'wonk lu', key: 'zqsiEw5' },
    { value: 'William Blazkowicz', key: 'psg2PM5' },
    { value: 'Winston Smith', key: 'zqsiEw6' },
    { value: 'William Blazkowicz', key: 'psg2PM6' },
    { value: 'wanda sya', key: 'zqsiEw7' },
    { value: 'William Blazkowicz', key: 'psg2PM7' },
    { value: 'Winston Smith', key: 'zqsiEw8' },
    { value: 'Willy Marquez', key: 'psg2PM8' },    
    { value: 'Winston Smith', key: 'zqsiEw9' },
    { value: 'William Blazkowicz', key: 'psg2PM0' },
    { value: 'Gordon Comstock', key: '1K6I18' },
    { value: 'Gabriel santso', key: '1K6I1238' },

    { value: 'Gilmar Estrada', key: '1K6I2318' },

    { value: 'Philip Ravelston', key: 'NVHSkA' },
    { value: 'Paola Vera', key: 'NVHSkA3' },
    { value: 'Pablo Lomas', key: 'NVHSk1243sA3' },


    { value: 'Rosemary Waterlow', key: 'SaHqyG' },
    { value: 'Julia Comstock', key: 'iaT1Ex' },
    { value: 'Mihai Maldonado', key: 'OvMd5e' },
    { value: 'Murtaza Molina', key: '25zqAO' },
    { value: 'Peter Petigrew', key: '8cWuu3' },
  ]

const TabViewExample =({navigation}) => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'By name' },
    { key: 'second', title: 'By speciallity' },
    { key: 'thirt', title: 'Cerca de mi' },
  ]);


  return (
      <><Searchbar
          placeholder="Buscar..."
          icon={require('./src/busqueda.png')} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={ ({ route}) => {
          switch (route.key) {
            case 'first':
              return <FirstRoute navigation={navigation}/>;
            case 'second':
              return <SecondRoute navigation={navigation}/>;
            case 'thirt':
                return <ThirtRoute />;
            default:
              return null;
          }
        }}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container} /></>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  listItemContainer: {
    flex: 1,
    justifyContent: 'center',
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  listItemLabel: {
    color: '#000',
    fontSize: 14,
  },
  sectionHeaderContainer: {
    backgroundColor: 'gray',
    justifyContent: 'center',
  },

  sectionHeaderLabel: {
    color: '#000',
  },
  container2: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: 'center',
    marginTop:'15%'
  },

});

export default TabViewExample;