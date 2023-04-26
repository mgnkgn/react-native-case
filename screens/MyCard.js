import { Text, View } from "react-native";
import MyCardHeader from "../components/MyCard/MyCardHeader";
import MyCardMidRow from "../components/MyCard/MyCardMidRow";
import TransactionList from "../components/MyCard/TransactionList";
import FocusAwareStatusBar from "../util/FocusAwareBar";

function MyCard() {
  return (
    <>
      <FocusAwareStatusBar
        backgroundColor="white"
        style="light"
        animated={false}
      />
      <View style={{ flex: 1, width: "100%", backgroundColor: "#ffffff" }}>
        <MyCardHeader />
        <MyCardMidRow />
        <TransactionList />
      </View>
    </>
  );
}

export default MyCard;
