import { StyleSheet, Text, View } from "react-native";
import BalanceHeader from "../components/Balance/BalanceHeader";
import Transactions from "../components/Balance/Transactions";
import { StatusBar } from "expo-status-bar";
import FocusAwareStatusBar from "../util/FocusAwareBar";

function Balance() {
  return (
    <>
      <FocusAwareStatusBar
        backgroundColor="black"
        style="dark"
        animated={false}
      />
      <View style={styles.rootCt}>
        <BalanceHeader />
        <Transactions />
      </View>
    </>
  );
}

export default Balance;

const styles = StyleSheet.create({
  rootCt: {
    flex: 1,
    width: "100%",
  },
});
