import React from 'react';
import { FAB, Text, TextInput } from 'react-native-paper';

import { StyleSheet, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Colors from './src/utilitis/Colors';

const Appointment = ({ route }) => {
  const { date, doctor } = route.params;
  const [selectedDay, setSelectedDay] = React.useState('');
  const [selectedHour, setSelectedHour] = React.useState(selectedDay);
  const [names, setNames] = React.useState('');

  const days = [
    { key: '1', 
      value: 'Miercoles, 1 de marzo', 
      hours: [
        { key: '1', value: '15:30' },
        { key: '2', value: '16:00' },
        { key: '3', value: '17:00' },
        { key: '4', value: '18:30' },
      ],
      slotsHours : [
        { key: '1', value: '14:30-18:30' },
      ]
    },
    { key: '2',
     value: 'Jueves, 2 de marzo',
     hours: [
      { key: '1', value: '15:30' },
      { key: '2', value: '16:00' },
      { key: '3', value: '17:00' },
      { key: '4', value: '18:30' },
      ],
      slotsHours : [
        { key: '1', value: '15:30-19:30' },
      ]
    },
    { key: '3', 
      value: 'Viernes, 3 de marzo',
      hours: [
      { key: '1', value: '15:30' },
      { key: '2', value: '16:00' },
      { key: '3', value: '17:00' },
      { key: '4', value: '18:30' },
      ],
      slotsHours : [
        { key: '1', value: '15:00-18:00' },
      ]
    },
    { key: '4',
      value: 'Lunes, 6 de marzo',
      hours: [
        { key: '1', value: '15:30' },
        { key: '2', value: '16:00' },
        { key: '3', value: '17:00' },
        { key: '4', value: '18:30' },
      ],
      slotsHours : [
        { key: '1', value: '16:30-20:00' },
      ]
    },
    { key: '5',
      value: 'Miercoles, 8 de marzo',
      hours: [
      { key: '1', value: '15:30' },
      { key: '2', value: '16:00' },
      { key: '3', value: '17:00' },
      { key: '4', value: '18:30' },
      ],
      slotsHours : [
        { key: '1', value: '16:00-20:00' },
      ]
    },
  ];
  const hours = [
    { key: '1', value: '15:30' },
    { key: '2', value: '16:00' },
    { key: '3', value: '17:00' },
    { key: '4', value: '18:30' },
  ];

  const slotsHours = [
    { key: '1', value: '14:30-18:30' },
  ];

  return (
    <View style={styles.scene}>
      <Text variant='headlineSmall' style={{marginHorizontal: 10, marginTop: 10}}>
        Tu cita sera con {doctor.nombre}
      </Text>
      <TextInput
        label='Paciente'
        mode={'outlined'}
        outlineStyle={styles.textInput}
        activeOutlineColor={Colors.DARK_GRAY}
        value={names}
        onChangeText={names => setNames(names)}
        />
      <Text variant='headlineSmall' style={{margin: 10}}>
        Elige la fecha para tu cita:
      </Text>
      <View
        style={styles.view}
      >
        <SelectList
          setSelected={setSelectedDay}
          defaultOption={date}
          data={days}
          boxStyles={{width:200}}
          placeholder='Elige un dia'
          searchPlaceholder='Elige un dia'
        />
        <SelectList
          setSelected={setSelectedHour}
          data={slotsHours}
          boxStyles={{width:150}}
          placeholder='Elige una hora'
          searchPlaceholder='Elige una hora'
        />
      </View>
      <FAB
          style={styles.fab}
          color={'white'}
          label='Crear la cita'
        />
    </View>
  );
};
export default Appointment;

const styles = StyleSheet.create({
    textInput: {
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#F5F8FA',
        borderColor: '#667780'
    },
    scene: {
        flex: 1,
        backgroundColor: '#fff'
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
    }
});
