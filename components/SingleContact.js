import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const SingleContact = ({ firstName, lastName, name, phoneNumbers }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <FlatList
        style={styles.phoneNumbers}
        data={phoneNumbers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.number}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  phoneNumbers: {
    marginLeft: 8,
  },
});

export default SingleContact;
