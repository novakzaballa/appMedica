
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import MainStack from './navigation/MainStack';
import Stacks from './navigation/Stacks';
import Home from './screens/Home';

function App() {
  return(
    <SafeAreaView style ={{flex:1}}>
      <PaperProvider>
        <Stacks/>
      </PaperProvider>
    </SafeAreaView>
  )
}
export default App;