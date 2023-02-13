import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Checkbox from "expo-checkbox";
import { useStateContext } from "../context/StateProvider";
import { AntDesign } from "@expo/vector-icons";

const SingleContact = ({ firstName, lastName, name, phoneNumbers, id }) => {
  const [isChecked, setChecked] = useState(false);
  const [checkCircleIndex, setCheckCircleIndex] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState();
  const { group, groups, setGroup, setGroups } = useStateContext();

  const checkHandler = (value) => {
    if (value) {
      setGroup({
        ...group,
        contacts: [...group.contacts, { id, name, phoneNumber, firstName }],
      });
    } else {
      setGroup({
        ...group,
        contacts: [...group.contacts.filter((item) => item.id !== id)],
      });
    }
    setChecked(value);
  };

  useEffect(() => {
    setPhoneNumber(phoneNumbers[checkCircleIndex]);
  }, [checkCircleIndex]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>

        {phoneNumbers.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 4,
                width: 200,
              }}
              onPress={() => {
                if (index !== checkCircleIndex) {
                  setCheckCircleIndex(index);
                }
              }}
            >
              <Text>{item.number}</Text>
              {checkCircleIndex === index && (
                <AntDesign name="checkcircle" size={14} color="green" />
              )}
            </TouchableOpacity>
          );
        })}
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
