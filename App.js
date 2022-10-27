import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Card } from "./components/Card";
import { Input } from "./components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>IMC</Text>
      <Card>
        <Input label="Peso" value=""/>
        <Input label="Altura" value=""/>
      </Card>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff"
  },
});
