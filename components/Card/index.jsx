import { StyleSheet, View } from "react-native";

export const Card = (props) => {
  const { children } = props;

  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#8e24aa",
    borderColor: "#000",
    padding: 16,
    borderRadius: 32,
    margin: 16,
    width: "90%",
    borderWidth: 2
  },
  input: {
    color: "#fff"
  }
});
