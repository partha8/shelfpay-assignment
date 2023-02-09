import { View, Text, FlatList } from "react-native";
import React from "react";
import { useStateContext } from "../context/StateProvider";
import SingleContact from "../components/SingleContact";

const ContactsScreen = () => {
  const { contacts } = useStateContext();
  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SingleContact {...item} />}
      />
    </View>
  );
};

export default ContactsScreen;
