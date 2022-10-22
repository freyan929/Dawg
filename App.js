import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, headerStyle, Text, Image, View, Alert } from 'react-native';
import { Button } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native'
import { SearchBar } from 'react-native-elements';

import image from './assets/favicon.png';
import image1 from './assets/talking.jpeg';
import image2 from './assets/woman.jpeg';
 
const Stack = createNativeStackNavigator();
console.log(image);
 
export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={{ title: 'Welcome' }}
       />
       <Stack.Screen name="Profile" component={ProfileScreen} />
       <Stack.Screen name="Test" component={TestScreen} />
       <Stack.Screen name="Landing" component={LandingScreen} />
       <Stack.Screen name="Call" component={CallScreen}/>
       <Stack.Screen name="Login" component={SecondScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
 );
}
 
const HomeScreen = ({ navigation }) => {
 return (
   <View style={styles.container}>
    {/* IMAGE FOR LOGO */}
 
    <Button
     style={styles.buttonStyle}
     title="Sign Up to See Your Dawgs"
     type="outline"
     radius="20"
     onPress={() => navigation.navigate('SecondScreen', { name: 'Lilly' })} />

   <Button
     style={styles.buttonStyle}
     title="Log In to See Your Dawgs"
     type="outline"
     radius="20"
     onPress={() => navigation.navigate('SecondScreen', { name: 'Lilly' })} />
   </View>
 );
};
 
const SecondScreen = ({ navigation, route }) => {
 return (
   <View style={styles.container}>
      <Text>
        Please Enter Your Username and Password.
      </Text>
      <SearchBar
        placeholder="Enter Username"
        onChangeText={this.updateSearch}
        value={search}
      />

      <SearchBar
        placeholder="Enter Password"
        onChangeText={this.updateSearch}
        value={search}
      />

   <Button
     style={styles.buttonStyle}
       title="Login"
       type="solid"
       radius="20"
       onPress={() => navigation.navigate('Landing')} />
   </View>
 );
};


 
const ProfileScreen = ({ navigation, route }) => {
 return (
   <View style={styles.container}>
     <Text>This is {route.params.name}'s profile</Text>
   </View>
 );
};
 
const TestScreen = ({ navigation, route }) => {
 return (
   <View style={styles.container}>
       <Text>Slay...</Text>
       <StatusBar style="auto" />
       <Button
         title="Press this button!!!!"
         onPress={() => Alert.alert('AAAAH u pressed a button')}
       />
     </View>
 );
};
 
const CallScreen = ({navigation,route}) => {
 return (
   <View style={styles.container}>
   <Image source={image1} />
     <Text> Would you rather... </Text>
     <Image source={image2} />
     <Button
       title = "Take a screenshot!"
       type="solid"
       radius="20"
       onPress={() => navigation.navigate('')}
       />
   </View>
 )
}
 
const LandingScreen = ({ navigation, route }) => {
 return (
   <View style={styles.container}>
     <Text> Hi {route.params.name}, Welcome To Dawg. </Text>
     <Text> Say hi to {route.params.friend}! </Text>
     <Image source={image2} />
     <Button
         title="Ring"
         onPress={() => navigation.navigate('Call', { name: 'Lilly' })} />
     <View style={{ flex: 1, backgroundColor: '#665A48', alignItems: 'center', justifyContent: 'center',height: '20px' }}>
       <View style={{ flex: 1, flexDirection: 'row' }}>
         <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '665A48' }}>
           <View>
            <Text>
             Friends
            </Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '665A48' }}>
           <View>
             <Text>
               Profile
           </Text>
           </View>
         </TouchableOpacity>
       </View>
     </View>
   </View>
 );
};
 
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#EDE4E0',
   tabBarOptions: {
     style: {
       backgroundColor: '#9F8772',
     }
   },
   alignItems: 'center',
   justifyContent: 'center',
 },
 buttonStyle: {
   margin: 5,
   size: 'lg',
 },
 homeContainer: {
   backgroundColor: 'EDE4E0'
 }
 
});