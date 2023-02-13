import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useStateContext } from "../context/StateProvider";

const GroupScreen = () => {
  const { group } = useStateContext();

  return (
    <View style={styles.container}>
      {group && (
        <FlatList
          data={group.contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.name}>
              {item.name} : {item.phoneNumber.number}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
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
export default GroupScreen;
