import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useStateContext } from "../context/StateProvider";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.newGroupBtn}
        onPress={() => navigation.navigate("Contacts")}
      >
        <AntDesign name="pluscircle" size={34} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  newGroupBtn: {
    position: "absolute",
    top: "90%",
    right: "5%",
    elevation: 5,
    shadowColor: "black",
  },
});

export default HomeScreen;
