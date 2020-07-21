import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const FileInput = () => {

    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        alert(result.name);
        console.log(result);
    }

    return (
        <View style={{alignItems: 'center'}} >
            <Text style={styles.Textstyle}>3. Short Description and Chapter  </Text>
            <Button
                color="gray"
                title="Select Document"
                onPress={this._pickDocument} />

        </View>
    );
}

export default FileInput;

const styles = StyleSheet.create({
   Textstyle:{
        fontSize: 20,
        fontWeight: 'bold', 
        paddingTop:20,
        textAlign: 'center',
    }
});
