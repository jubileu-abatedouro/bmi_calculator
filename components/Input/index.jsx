import { Text, View, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";


export function Input({onChangeText, value, label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
      style={styles.input}
      onChangeText={onChangeText} 
      value={value}/>
    </View>
  );
}
