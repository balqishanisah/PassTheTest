import React, { useState } from "react";
import { View, Picker, Text } from "react-native";

const App = () => {
    const [selectedValue, setSelectedValue] = useState(" ");
    return (
        <View style={{alignItems: "center"}}>
            <Text style={{fontSize: 20,fontWeight: 'bold', paddingTop:20}}>1. Choose Majoring</Text>
            <Picker
            
                selectedValue={selectedValue}
                style={{ width: '80%'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            
            >
                <Picker.Item label="Aerospace" value="aerospace" />
                <Picker.Item label="Biochemical-Biotechnology" value="biochemical-biotechnology" />
                <Picker.Item label="Civil" value="civil" />
                <Picker.Item label="Communication" value="communication" />
                <Picker.Item label="Electronics-Computer and Information" value="cie" />
                <Picker.Item label="Manufacturing" value="manufacturing" />
                <Picker.Item label="Mechanical" value="mechanical" />
                <Picker.Item label="Mechatronics" value="mechatronics" />
            </Picker>
            
        </View >
  );
}

export default App;

