import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useStateContext } from "../context/StateProvider";
import SingleContact from "../components/SingleContact";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ContactsScreen = () => {
  const { contacts, group, groups } = useStateContext();
  const navigation = useNavigation();
  const submitHandler = () => {
    
  };
  return (
    <View style={{ flex: 1 }}>
      {group.contacts.length > 0 && (
        <View style={styles.avatarContainer}>
          {group.contacts.map((item) => {
            return (
              <Text style={styles.avatar} key={item.id}>
                {item.name[0]}
              </Text>
            );
          })}

          <TouchableOpacity
            onPress={() => navigation.navigate("New Group")}
            style={styles.nextBtn}
          >
            <Text style={{ fontSize: 16, marginRight: 4 }}>Next</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SingleContact {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 2,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    borderRadius: 100,
    marginRight: 5,
  },

  nextBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginLeft: "auto",
  },
});

export default ContactsScreen;
