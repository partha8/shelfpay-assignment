import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useStateContext } from "../context/StateProvider";

const GroupCard = ({ groupName, contacts, id }) => {
  const navigation = useNavigation();
  const { setGroup } = useStateContext();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          setGroup({ groupName, contacts, id });
          navigation.navigate("Group Info");
        }}
      >
        <Text style={styles.groupTitle}>{groupName}</Text>
        <View style={{ flexDirection: "row" }}>
          {contacts.map((contact) => {
            return <Text key={contact.id}>{contact.firstName}, </Text>;
          })}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 8,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default GroupCard;
