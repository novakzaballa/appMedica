import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Agenda, Calendar, CalendarProvider, ExpandableCalendar } from 'react-native-calendars'

const AgendaList = () => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
      console.log('DATAs:', DATA.length);

    const _renderItem = (item)  => {
        return (
            <View>
                <Text>{title}</Text>
            </View>
            )
    }

    return(
    <View style={{ flex: 1 }}>
        {/*<CalendarProvider
            date = {'2023-03-01'}
            disabledOpacity = { 0.6 }
            showTodayButton = { false } >
        <ExpandableCalendar firstDay = { 1 }/>
        {DATA.length !== 0 &&
            <Agenda
                sections = { DATA } 
                renderItem={_renderItem}/>
        }
    </CalendarProvider>*/}
    </View>)

}

export default AgendaList;