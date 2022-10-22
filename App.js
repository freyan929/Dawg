import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
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
    <><Button
      title="Go to Harshitha's profile"
      onPress={() => navigation.navigate('Profile', { name: 'Harshitha' })} /><Button
        title="Go home babe"
        onPress={() => navigation.navigate('Test')} /></>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
