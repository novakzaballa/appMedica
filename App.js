import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import Stacks from './navigation/Stacks';

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
