import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useStateContext } from "../context/StateProvider";

const HomeScreen = () => {
  const { contacts } = useStateContext();
  const navigation = useNavigation();
 
  return (
    <View>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("Contacts")}>
          Go to contacts
        </Text>
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
};

export default HomeScreen;
