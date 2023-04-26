import { FlatList, StyleSheet, Text, View } from "react-native";
import TransactionItem from "../Balance/TransactionItem";

function TransactionList() {
  const dataArr = [
    {
      id: 1,
      img: require("../../assets/img/apple-bg.png"),
      header: "Apple",
      time: "3:53",
      cost: 799,
    },
    {
      id: 2,
      img: require("../../assets/img/clickup-bg.png"),
      header: "Clickup",
      time: "3:53",
      cost: 15,
    },
    {
      id: 3,
      img: require("../../assets/img/amazon-bg.png"),
      header: "Amazon",
      time: "3:53",
      cost: 267,
    },
    {
      id: 4,
      img: require("../../assets/img/apple-bg.png"),
      header: "Apple",
      time: "3:53",
      cost: 799,
    },
    {
      id: 5,
      img: require("../../assets/img/clickup-bg.png"),
      header: "Clickup",
      time: "3:53",
      cost: 15,
    },
    {
      id: 6,
      img: require("../../assets/img/amazon-bg.png"),
      header: "Amazon",
      time: "3:53",
      cost: 267,
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

export default TransactionList;

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
    height: "100%",
    paddingTop: 20,
    flex: 1,
  },
});
