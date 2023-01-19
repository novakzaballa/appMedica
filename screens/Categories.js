import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Button, Card, Modal, Paragraph, Portal, Provider, Searchbar } from 'react-native-paper';

const Categories = ({navigation}) => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};


    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Casa 1',
          location: 'Sopocachi',
          description: 'Departamento en zona centrica',
          img: 'https://picsum.photos/701',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Casa 2',
          description: 'Pequeña casa con 2 dormtorios',
          location: 'Achumani',

          img: 'https://picsum.photos/700',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Casa 3',
          location: 'Villa copacabana',
          description: 'Pequeño departamento con todo incluido',
          img: 'https://picsum.photos/3744',
        },
      ];
      const Item = ({description, title, img, location}) => (
        <Card
            onPress = {
                () =>{
                    navigation.navigate('Profile')
                }}
            style = {categorieStyles.cardContainer}
            >
            <Card.Title title={title} subtitle={location}/>
            <Card.Cover source={{ uri: img }}/>
            <Paragraph>{description}</Paragraph>
            <Card.Actions>
                <Button
                    style={categorieStyles.buttonContainer}
                    mode="contained"
                    onPress = {
                        () =>{
                            navigation.navigate('Profile')
                        }}>
                        Ir
                </Button>
            </Card.Actions>
        </Card>

      );
      
        const renderItem = ({ item }) => (
          <Item
           title={item.title}
           img = {item.img}
           location = {item.location}
           description = {item.description} />
        );
      
    return(
        <View>
            <View
            style = {categorieStyles.searchContainer}>
              <Searchbar
                  placeholder="Buscar..."
                  icon={require('./src/busqueda.png')}
                  style = {categorieStyles.search}
              />
              <Button
                  style = {categorieStyles.filter}
                  icon = {require('./src/filtrar.png') }
                  onPress={showModal}>
              </Button>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Provider>
              <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                  <Text>Habitaciones</Text>
                </Modal>
              </Portal>
              <Button style={{marginTop: 30}} onPress={showModal}>
                Show
              </Button>
            </Provider>
        </View>   
    )


}
export default Categories;

const categorieStyles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#FF8B00',
      borderRadius: 10,
      width: '25%',
    },
    buttonText:{
      color: "black"
    },
    cardContainer:{
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    searchContainer:{
      flexDirection: "row"
    },
    filter:{
      
    },
    search:{
      width: '85%',
    },
  });