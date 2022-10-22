import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, headerStyle, Text, Image, View, Alert } from 'react-native';
import { Button } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
      title="Log In to See Your Dawgs"
      type="outline"
      radius="20"
      onPress={() => navigation.navigate('Profile', { name: 'Harshitha' })} />

    <Button
      style={styles.buttonStyle}
        title="Become a Dawg"
        type="solid"
        radius="20"
        onPress={() => navigation.navigate('Test')} />
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
    backgroundColor: '#fff'
  }
});
