import { StyleSheet, Text, View } from "react-native";

function TransactionMidRow() {
  return (
    <View style={styles.rootCt}>
      <View style={styles.leftCt}>
        <Text style={styles.header}>Total Expenses</Text>
        <Text style={styles.money}>$3029</Text>
      </View>
      <View style={styles.rightCt}>
        <Text style={styles.header}>Monthly Spending</Text>
        <Text style={styles.money}>$426</Text>
      </View>
    </View>
  );
}

export default TransactionMidRow;

const styles = StyleSheet.create({
  rootCt: {
    paddingBottom: 7,
    paddingTop: 14,
    paddingHorizontal: 27,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  header: {
    color: "#bcbcbc",
  },
  money: {
    fontSize: 30,
  },
  leftCt: {
    alignItems: "flex-start",
  },
  rightCt: {
    alignItems: "flex-end",
  },
});
