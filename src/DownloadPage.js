import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList} from 'react-native';

const DownloadPage = () => {
    return (
        <View>
            <Text style= {styles.StyleSheet}> Download Page</Text>
        </View>
    );
}

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
});

export default DownloadPage;
