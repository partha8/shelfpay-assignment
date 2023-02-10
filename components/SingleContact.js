import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { useStateContext } from "../context/StateProvider";

const SingleContact = ({ firstName, lastName, name, phoneNumbers, id }) => {
  const [isChecked, setChecked] = useState(false);
  const { group, groups, setGroup, setGroups } = useStateContext();

  const checkHandler = (value) => {
    if (value) {
      setGroup({
        ...group,
        contacts: [...group.contacts, { id, name, phoneNumbers, firstName }],
      });
    } else {
      setGroup({
        ...group,
        contacts: [...group.contacts.filter((item) => item.id !== id)],
      });
    }
    setChecked(value);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <FlatList
          style={styles.phoneNumbers}
          data={phoneNumbers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.number}</Text>}
        />
      </View>

      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={checkHandler}
        color={isChecked ? "#4630EB" : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
