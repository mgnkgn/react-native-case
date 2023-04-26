import { FlatList, StyleSheet, Text, View } from "react-native";

import TransactionHeader from "../components/Transactions/TransactionHeader";
import TransactionMidRow from "../components/Transactions/TransactionMidRow";
import TransactionList from "../components/Transactions/TransactionList";
import FocusAwareStatusBar from "../util/FocusAwareBar";

function Transactions() {
  return (
    <>
      <FocusAwareStatusBar
        backgroundColor="black"
        style="dark"
        animated={false}
      />
      <View style={styles.rootCt}>
        <TransactionHeader />
        <TransactionMidRow />
        <TransactionList />
      </View>
    </>
  );
}

export default Transactions;

const styles = StyleSheet.create({
  rootCt: {
    flex: 1,
    width: "100%",
  },
});
