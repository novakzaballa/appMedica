import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Agenda, Calendar, CalendarProvider, ExpandableCalendar } from 'react-native-calendars';
import { Button, Card, Searchbar, Text } from 'react-native-paper';

const AgendaList = () => {
    const [items, setItems]= React.useState({});

      const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
        const fontSize = isFirst ? 16 : 14;
        const color = isFirst ? 'black' : '#43515c';
    
        return (
          <Card style={[styles.item, {height: reservation.height}]}>
            <Text style={{fontSize, color}}>{reservation.hour}</Text>
            <Text style={{fontSize, color}}>{reservation.name}</Text>
          </Card>
        );
      }
    
      const rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
      }
    
      const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
      const renderEmptyDate = () => {
        return (
          <View style={styles.emptyDate}>
          </View>
        );
      }

    return(
    <View style={{ flex: 1 }}>
      {
        <Agenda
          items={{
            '2023-02-16': [{name: 'Juan Manuel Perez', hour: '17:00'}],
            '2023-02-28': [{name: 'Oscar Ramos', height: 80, hour: '17:00'}],
            '2023-02-25': [{name: 'Manuel Medrano', hour: '14:00'}, {name: 'Omar Guzman', hour: '15:00'}]
          }}
          renderItem={renderItem}
          rowHasChanged={rowHasChanged}
          showClosingKnob={true}
          renderEmptyDate={renderEmptyDate}
          renderEmptyData={() => {
            return <View />;
          }}
          refreshing={false}
        />
      }
    </View>)

}

export default AgendaList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});
