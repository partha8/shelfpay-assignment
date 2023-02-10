import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useStateContext } from "../context/StateProvider";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NewGroup = () => {
  const [input, setInput] = useState("");
  const { group, setGroup, setGroups, groups } = useStateContext();
  const navigation = useNavigation();
  
  const submitHandler = async () => {
    if (input) {
      const newGroup = {
        ...group,
        groupName: input,
        id: new Date().toString(),
      };
      console.log(newGroup);
      setGroups((prev) => {
        return [...prev, newGroup];
      });
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={styles.input}
          placeholder="Group name"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity onPress={submitHandler} style={styles.nextBtn}>
          <Text style={{ fontSize: 16, marginRight: 4 }}>Submit</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        {group.contacts.map((item) => {
          return (
            <View
              style={{ justifyContent: "center", alignItems: "center" }}
              key={item.id}
            >
              <Text style={styles.avatar}>{item.name[0]}</Text>
              <Text>{item.firstName}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  input: {
    width: "50%",
    padding: 3,
    fontSize: 20,
    borderBottomWidth: 1,
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
  avatarContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  nextBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginLeft: "auto",
  },
});

export default NewGroup;
