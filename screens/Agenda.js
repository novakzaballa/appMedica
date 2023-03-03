import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  AgendaList as Agenda,
  CalendarProvider,
  ExpandableCalendar,
} from 'react-native-calendars';
import {Button, Card, Text} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import DoctorCard from './components/DoctorCard';
import Colors from './src/utilitis/Colors';

const AgendaList = () => {
  const [items, setItems] = React.useState({});
  const doctorDates = [
    {
      title: '2023-03-03',
      data: [
        {
          nombre: 'Juan Lordoño',
          key: 'zqsiE2w3',
          profilePhoto:
            'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*',
          especialidad: 'Cardiologia',
          isAppoinment: true,
          ubicacion: {
            latitude: -16.497555,
            longitude: -68.124245,
            city: 'La paz',
            description: 'Stadium',
          },
          verified: true,
        },
      ],
    },
    {
      title: '2023-03-04',
      data: [
        {
          nombre: 'Alberto Medrano',
          key: '1K6Iw00s18',
          profilePhoto:
            'https://www.kauveryhospital.com/doctorimage/recent/salem/Dr_P_V_Dhanapal.jpg',
          especialidad: 'Gastroenterologia',
          isAppoinment: true,
          ubicacion: {
            latitude: -16.588905,
            longitude: -68.176811,
            city: 'El Alto',
            description: 'El Alto',
          },
        },
      ],
    },
  ];

  const renderItem = React.useCallback((item: any) => {
    return (
      <DoctorCard
        profilePhoto={item.item.profilePhoto}
        name={item.item.nombre}
        specialty={item.item.especialidad}
        verified={item.item.verified}
        description={item.item.ubicacion.description}
      />
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <CalendarProvider
        date={'2023-03-02'}
        disabledOpacity={0.6}
        showTodayButton={false}
      >
        {<ExpandableCalendar firstDay={1} />}
        <SafeAreaView style={{backgroundColor: Colors.TRANSPARENT}}>
          <Agenda
            sections={doctorDates}
            renderItem={renderItem}
            sectionStyle={{backgroundColor: Colors.LIGHT_GRAY}}
            dayFormat={'dd/MM/yyyy'}
          />
        </SafeAreaView>
      </CalendarProvider>
    </View>
  );
};

export default AgendaList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
