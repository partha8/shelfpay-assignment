import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useStateContext } from "../context/StateProvider";
import { AntDesign } from "@expo/vector-icons";
import GroupCard from "../components/GroupCard";

const HomeScreen = () => {
  const navigation = useNavigation();

  const { group, setGroup, groups } = useStateContext();

  useFocusEffect(
    useCallback(() => {
      setGroup({ groupName: "", contacts: [], id: "" });
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroupCard {...item} />}
      />

      <TouchableOpacity
        style={styles.newGroupBtn}
        onPress={() => navigation.navigate("Contacts")}
      >
        <AntDesign name="pluscircle" size={34} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  newGroupBtn: {
    position: "absolute",
    top: "90%",
    right: "5%",
    elevation: 5,
    shadowColor: "black",
  },
});

export default HomeScreen;
