import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, ScrollView, FlatList, View } from 'react-native';
import Inbox from './Inbox';
import { NavigationContainer } from '@react-navigation/native';
import { InboxStack } from './Routes/Inboxstack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DraftStack } from './Routes/DraftStack';
import 'react-native-gesture-handler';
import { IconComponentProvider } from '@react-native-material/core';
import MaterialCommmunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import CustomDrawerContent from './Components/CustomDrawerComp';
const Drawer = createDrawerNavigator()

export default function App() {
  // const [count,setCount]=useState(0)
  // const handlePress =()=>{
  //  setCount(count +1)
  // }
  const [months, setMonths] = useState([
    { name: 'january', id: 1 },
    { name: 'february', id: 2 },
    { name: 'march', id: 3 },
    { name: 'april', id: 4 },
    { name: 'may', id: 5 },
    { name: 'june', id: 6 },
    { name: 'july', id: 7 },
    { name: 'august', id: 8 },
    { name: 'september', id: 9 },
    { name: 'octobar', id: 10 },
    { name: 'novembar', id: 11 },
    { name: 'december', id: 12 },



  ])


  return (
    <>
      <IconComponentProvider IconComponent={MaterialCommmunityIcons}>
        <StatusBar style='auto' />
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{ headerShown: false }}
          drawerContent={(props)=><CustomDrawerContent{...props}/>}>
            <Drawer.Screen name='Inbox' component={InboxStack} options={{
              title: 'Inbox',
              drawerIcon: () => (
                <>
                  <Icon name="inbox" size={24} />
                </>
              )



            }} />
            <Drawer.Screen name='Drafts' component={DraftStack} options={{
              title: 'Draft',
              drawerIcon: () => (
                <>
                  <Icon name="email-open" size={24} />
                </>
              )



            }} />
          </Drawer.Navigator>
        </NavigationContainer>
      </IconComponentProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#777',
    width: 300,
    height: 60,
    padding: 10,
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100% ',
  },
  text: {
    fontWeight: 'bold',
    backgroundColor: 'purple',
    width: 150,
    padding: 15,
    margin: 15,
  }

});
