import { View, Text, StyleSheet } from "react-native";
import React from "react";

const GroupCard = ({ groupName, contacts, id }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.groupTitle}>{groupName}</Text>
      <View style={{ flexDirection: "row" }}>
        {contacts.map((contact) => {
          return <Text key={contact.id}>{contact.firstName}, </Text>;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default GroupCard;
