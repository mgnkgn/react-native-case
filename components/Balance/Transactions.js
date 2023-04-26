import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import TransactionItem from "./TransactionItem";

function Transactions() {
  const dataArr = [
    {
      id: 1,
      img: require("../../assets/img/dribbble-bg.png"),
      header: "Dribbble",
      time: "3:53",
      cost: 72,
    },
    {
      id: 2,
      img: require("../../assets/img/figma-bg.png"),
      header: "Figma",
      time: "3:53",
      cost: 25,
    },
    {
      id: 3,
      img: require("../../assets/img/dd-bg.png"),
      header: "Dunkin Donuts",
      time: "3:53",
      cost: 30,
    },
    {
      id: 4,
      img: require("../../assets/img/subway-bg.png"),
      header: "Subway",
      time: "3:53",
      cost: 42,
    },
    {
      id: 5,
      img: require("../../assets/img/dribbble-bg.png"),
      header: "Dribbble",
      time: "3:53",
      cost: 72,
    },
    {
      id: 6,
      img: require("../../assets/img/figma-bg.png"),
      header: "Figma",
      time: "3:53",
      cost: 25,
    },
    {
      id: 7,
      img: require("../../assets/img/dd-bg.png"),
      header: "Dunkin Donuts",
      time: "3:53",
      cost: 30,
    },
    {
      id: 8,
      img: require("../../assets/img/subway-bg.png"),
      header: "Subway",
      time: "3:53",
      cost: 42,
    },
  ];
  return (
    <View style={styles.rootCt}>
      <Text style={styles.header}>Transactions</Text>
      <View style={styles.flatCt}>
        <FlatList
          data={dataArr}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionItem transaction={item} img={item.img} />
          )}
        />
      </View>
    </View>
  );
}

export default Transactions;

const styles = StyleSheet.create({
  rootCt: {
    flex: 1,
    paddingHorizontal: 27,
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
  },
  flatCt: {
    paddingTop: 20,
    flex: 1,
  },
});
