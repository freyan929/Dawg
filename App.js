import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, headerStyle, Text, Image, View, Alert } from 'react-native';
import { Button } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TouchableOpacity, TextInput} from 'react-native'
import image from './assets/favicon.png';
import image1 from './assets/talking.jpeg';
import image2 from './assets/woman.jpeg';
import image3 from './assets/DAWG.png';
import jim from './assets/jim.png';
import dud from './assets/dud.png';
import sis from './assets/sis.png';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { fbauth } from "./firebaseConfig.js";

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
       <Stack.Screen name="Landing" component={LandingScreen} />
       <Stack.Screen name="Call" component={CallScreen}/>
       <Stack.Screen name="Login" component={LoginScreen}/>
       <Stack.Screen name="Settings" component={SettingsScreen}/>
      <Stack.Screen name="Call Log" component={CallLogScreen}/>
      <Stack.Screen name="Feed" component={FeedScreen}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}/>
 
     </Stack.Navigator>
   </NavigationContainer>
 );
}
 
const HomeScreen = ({ navigation }) => {
 return (
   <View style={styles.container}>
    {/* IMAGE FOR LOGO */}

    <Image
    source={image3}
    style={{width: 300, height: 300, marginBottom: 20, borderRadius: 200}} />
 
   <Button
     style={styles.buttonStyle}
     title="Log In to See Your Dawgs"
     type="outline"
     radius="20"
     onPress={() => navigation.navigate('Login')} />
    <Button
     style={styles.buttonStyle}
     title="Sign up!"
     type="solid"
     radius="20"
     onPress={() => navigation.navigate('SignUp')} />
   </View>
 );
};
 
const LoginScreen = ({ navigation, route }) => {
  const [user, onChangeUser] = React.useState("Enter Username");
  const [pass, onChangePass] = React.useState('Enter Password');
 return (
   <View style={styles.container}>
    <Text style={styles.sign}> Sign in to see your dawgs!! </Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={onChangeUser}
        radius="20"
        value={user}
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={onChangePass}
        type="password"
        value={pass}
      />

   <Button
     style={styles.buttonStyle}
     title="submit!"
       onClick={() => signInWithEmailAndPassword({auth, email: {user}, password: {pass}})}
       onPress={() => navigation.navigate('Landing', { name: 'Lilly', friend: 'Kate'})} />
   </View>
 );
};

const SignUpScreen = ({ navigation, route }) => {
  const [user, onChangeUser] = React.useState("Enter Username");
  const [pass, onChangePass] = React.useState('Enter Password');
 return (
   <View style={styles.container}>
      <Text style={styles.sign}> DAWG. Join us. </Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={onChangeUser}
        radius="20"
        value={user}
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={onChangePass}
        type="password"
        value={pass}
      />
    
    <Button
     style={styles.buttonStyle}
     title="submit!"
       onClick={() => createUserWithEmailAndPassword({auth, email: {user}, password: {pass}})}
       onPress={() => navigation.navigate('Landing', { name: 'Lilly', friend: 'Kate'})} />

   </View>
 );
};
 
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subhead}>This is {route.params.name}'s profile</Text>
      <Image source={image1}
     style = {{width :300, height :300}} />
     <Button
     style={styles.buttonStyle}
     title=" ===>>> "
       onPress={() => navigation.navigate('Feed', { name: 'Lilly', friend: 'Kate'})} />
    </View>
  );
  };

  const FeedScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <View style={styles.container} alignItems="center" justifyContent="top">
        <Text style={styles.subhead}>Your call with {route.params.friend} today!</Text>
        <Text style={styles.ssubhead}>23:53</Text>
        <Text style={styles.ssubhead}>total calls together: 35</Text>
        <Text>@Kate says you... are feeling kinda sick</Text>
        <Image source={sis} style = {{width :150, height :150}} />
        <Text>@Lilly says Kate... just signed to her job!!!!</Text>
        </View>

        <View style={styles.newCont}>
        <Text style={styles.ssubhead}>@jim called @michael</Text>
        <Image source={jim} style = {{width :150, height :150}} />
        <Text>@Jim says Michael... is the world's best boss</Text>
        </View>

        <Text style={styles.ssubhead}>@man1 called @man2</Text>
        <Image source={dud} style = {{width :150, height :150}} />
        <Text>@Man1 says Man2... is feeling cold</Text>

       <Button
       style={styles.buttonStyle}
       title=" ===>>> "
         onPress={() => navigation.navigate('Landing', { name: 'Lilly', friend: 'Kate'})} />
      </View>
    );
    };

const SettingsScreen = ({ navigation }) => {
  return (
   <View style={styles.container}>
    <Text style={styles.ssubhead}>LILLY BLOOM</Text>
    <Text style={styles.ssubhead}>Username: @lillybloom</Text>
    <Text style={styles.ssubhead}>Streak: 4 🐶</Text>
  
     <Image source={image1}
    style = {{width :200, height :200, borderRadius: 200/2}} />
   <Button
     style={styles.buttonStyle}
     title="Call Log"
     type="outline"
     radius="20"
     onPress={() => navigation.navigate('Call Log')} />
   <Button
    style={styles.buttonStyle}
    title="Profile"
    type="outline"
    radius="20"
    onPress={() => navigation.navigate('Profile', { name: 'Lilly' })} />
    </View>
 );
 };
 const CallLogScreen = ({ navigation }) => {
  return (
   <View style={styles.container}>
    <Image source={image2}
    style = {{width :200, height :500}} />
    <Text>These are your previous call memories :</Text>
   </View>
 );
 };
 
 
const CallScreen = ({navigation,route}) => {
 return (
   <View style={styles.container}>
   <Image source={image1} style={styles.image}/>
     <Text> Would you rather... </Text>
     <Image source={image2} style={styles.image}/>
     <Button
       title = "Take a screenshot!"
       type="solid"
       style={styles.buttonStyle}
       radius="20"
       onPress={() => navigation.navigate('Profile', {name: "Kate"})} />

   </View>
 )
}

const auth = fbauth;
 
const Stack = createNativeStackNavigator();
 
const LandingScreen = ({ navigation, route }) => {
 return (
   <View style={styles.container}>
     <Text style={styles.sign}> Hi {route.params.name}, Welcome To Dawg. </Text>
     <Text style={styles.subhead}> Say hi to {route.params.friend}! </Text>
     <Image source={image2} />
     <Button
         title="Ring"
         style={styles.buttonStyle}
         onPress={() => navigation.navigate('Call', { name: 'Lilly' })} />
       <View style={{ flexDirection: 'row', height: 50}}>
         <TouchableOpacity style={{ flex: 1, marginRight: 3, marginLeft: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'tan', borderColor: "black"}}
         onPress={() => navigation.navigate('Profile', { name: 'Lilly', friend: 'Kate'})} >
           <View>
            <Text style={styles.button}>
             Friends
            </Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={{ flex: 1, marginRight: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'tan' }}
        onPress={() => navigation.navigate('Settings', { name: 'Lilly', friend: 'Kate'})} >
           <View>
             <Text style={styles.button}>
               Profile
           </Text>
           </View>
         </TouchableOpacity>
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
 newCont: {
    alignItems: 'center',
   justifyContent: 'center',
   marginBottom: 15,
 },
 buttonStyle: {
   margin: 5,
 },
 homeContainer: {
   backgroundColor: 'EDE4E0'
 },
 sign: {
  fontSize: 30,
  color: "brown",
 },
 image: {
  height: 300,
  width: 350,
 },
 subhead: {
  fontSize: 30,
  color: "gray",
 },
 ssubhead: {
  fontSize: 20,
  color: "brown",
 },
 button: {
  fontSize: 20,
  color: "white",
 },
 inputStyle: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
 },
 image3:{
   justifyContent: "top",    //  <-- you can use "center", "flex-start",
   resizeMode: "contain",
 }
 
});