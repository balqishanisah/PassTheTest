import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Picker from './src/picker';
import Input from './src/Input';
import FileInput from './src/FileInput';

function UploadScreen() {
  //const App = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.TextStyle}>This page allow you to upload materials.</Text>
        <Separator />
        <Picker />
        <Input />
        <FileInput />
        <View style={styles.fixToText}>
          <Button
            color="#043927"
            title="BACK"
           // onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            color="#043927"
            title="CONFIRM & DONE"
            onPress={() => Alert.alert('Successfully Uploaded')}
          />
        </View>
      </View>
    );
 // };
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Upload Page" component={UploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Separator = () => (
  <View style={styles.separator} />
);

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  Title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: '#3f704d',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  TextStyle: {
   // textAlign: 'center',
    fontSize: 20,
    marginVertical: 8,
    justifyContent: 'center',
    fontStyle: 'italic',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 100,

  },
});

export default App;