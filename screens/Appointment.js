import React from 'react';
import {Card, FAB, Text, TextInput} from 'react-native-paper';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import Colors from './src/utilitis/Colors';
import { AgendaList, CalendarProvider, ExpandableCalendar } from 'react-native-calendars';

const Appointment = ({route}) => {
  const {date, doctor} = route.params;
  const [selectedDay, setSelectedDay] = React.useState('');
  const [selectedDayB, setSelectedDayB] = React.useState(false);
  const [selectedHour, setSelectedHour] = React.useState(selectedDay);
  const [names, setNames] = React.useState('');

  const dayt = (day) =>{
    console.log('DEBUG: day', day.dateString)
    setSelectedDay(day.dateString);
    setSelectedDayB(true);
  }

  const days = [
    {
      key: '1',
      value: 'Miercoles, 1 de marzo',
      hours: [
        {key: '1', value: '14:30'},
        {key: '3', value: '17:00'},
        {key: '4', value: '18:30'},
      ],
      slotsHours: [{key: '1', value: '14:30-18:30'}],
    },
    {
      key: '2',
      value: 'Jueves, 2 de marzo',
      hours: [
        {key: '1', value: '12:30'},
        {key: '2', value: '15:00'},
        {key: '3', value: '16:00'},
        {key: '4', value: '16:30'},
      ],
      slotsHours: [{key: '1', value: '15:30-19:30'}],
    },
    {
      key: '3',
      value: 'Viernes, 3 de marzo',
      hours: [
        {key: '1', value: '15:00'},
        {key: '2', value: '16:30'},
        {key: '3', value: '17:00'},
        {key: '4', value: '17:30'},
      ],
      slotsHours: [{key: '1', value: '15:00-18:00'}],
    },
    {
      key: '4',
      value: 'Lunes, 6 de marzo',
      hours: [
        {key: '1', value: '15:30'},
        {key: '2', value: '16:00'},
        {key: '3', value: '17:00'},
        {key: '4', value: '18:30'},
      ],
      slotsHours: [{key: '1', value: '16:30-20:00'}],
    },
    {
      key: '5',
      value: 'Miercoles, 8 de marzo',
      hours: [
        {key: '1', value: '15:30'},
        {key: '2', value: '16:00'},
        {key: '3', value: '17:00'},
      ],
      slotsHours: [{key: '1', value: '16:00-20:00'}],
    },
  ];

  const doctorDates = [
    {
      title: '2023-03-03',
      data: [
        {
          key: 1,
          hora: '14:30'
        },
        {
          key: 2,
          hora: '15:30'
        },
        {
          key: 3,
          hora: '16:00'
        },
      ],
    },
    {
      title: '2023-03-04',
      data: [
        {
          key: 1,
          hora: '14:30-18:30'
        },
      ],
    }
  ];
  //doctorDates.map(day => console.log('DEBUG: day:', day.title))
  
  const renderItem = React.useCallback((item: any) => {
    return (
      <Card>
        <Text>{item.item.hora}</Text>
      </Card>
    );
  }, [selectedDay]);

  return (
    <View style={styles.scene}>
      <Text
        variant='headlineSmall'
        style={{marginHorizontal: 10, marginTop: 10}}
      >
        Tu cita sera con {doctor.nombre}
      </Text>
      <TextInput
        label='Paciente'
        mode={'outlined'}
        outlineStyle={styles.textInput}
        activeOutlineColor={Colors.DARK_GRAY}
        value={names}
        onChangeText={(names) => setNames(names)}
      />
      <Text variant='headlineSmall' style={{margin: 10}}>
        Elige la fecha para tu cita:
      </Text>
      <View style={styles.view}>
        <CalendarProvider
          date={'2023-03-02'}
          disabledOpacity={0.6}
          showTodayButton={false}
        >
          {<ExpandableCalendar
              firstDay={1} 
              onDayPress = { day => dayt(day)}
            />}
          
            <SafeAreaView style={{backgroundColor: Colors.TRANSPARENT}}>
            {selectedDayB && 
              <AgendaList
                sections={doctorDates.filter(day => day.title === selectedDay)}
                renderItem={renderItem}
                sectionStyle={{backgroundColor: Colors.LIGHT_GRAY}}
                dayFormat={'dd/MM/yyyy'}
              />}
            </SafeAreaView>
        </CalendarProvider>
      </View>
      <FAB style={styles.fab} color={'white'} label='Crear la cita' />
    </View>
  );
};
export default Appointment;

const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#F5F8FA',
    borderColor: '#667780',
  },
  scene: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fab: {
    backgroundColor: '#2196F3',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});
