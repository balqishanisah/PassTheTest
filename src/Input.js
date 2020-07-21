import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = () => {
  const [value, onChangeText] = React.useState(' ');
  const [value1, onChangeText1] = React.useState(' ');

  return (
    <View>
        <Text style={styles.Textstyle}>2. Subject Code </Text>

    <TextInput
      style={styles.input}
      placeholder="e.g.: MANU2216"
      onChangeText={text => onChangeText(text)}
      value={value}
      maxLength= {10}
      editable={true}
      autoCapitalize= {'characters'}
    />
    <Text style={styles.Textstyle}>3. Short Description and Chapter  </Text>

    <TextInput
      style={styles.input}
      placeholder="e.g: Chapter 1 (Quiz 1 SEM 2 17/18), my own cheat sheet "
      onChangeText1={text => onChangeText1(text)}
      value1={value}
      multiline
      numberOfLines={4}
      editable={true}
      autoCapitalize= {'sentences'}
    />

    </View>
  );
}
const styles = StyleSheet.create({
    input:{ 
        height: 40, 
        width: '70%', 
        borderColor: 'gray', 
        borderWidth: 1,
        marginHorizontal: 70,
        backgroundColor:'white',
    },
    Textstyle:{
        fontSize: 20,
        fontWeight: 'bold', 
        paddingTop:20,
        textAlign: 'center',
    }

});
export default Input;