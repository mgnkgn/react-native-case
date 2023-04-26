import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

function TransactionList() {
  const [ecLimit, setEcLimit] = useState("$10000");
  const [posLimit, setPosLimit] = useState("$3000");
  const [atmLimit, setAtmLimit] = useState("$5000");
  const onChangeEC = (input) => {
    setEcLimit("$" + input.replace(/\$/g, ""));
  };
  const onChangePos = (input) => {
    setEcLimit("$" + input.replace(/\$/g, ""));
  };
  const onChangeAtm = (input) => {
    setEcLimit("$" + input.replace(/\$/g, ""));
  };
  return (
    <View style={styles.rootCt}>
      <View style={styles.headerCt}>
        <Text style={styles.header}>Transaction Limits</Text>
      </View>

      <ScrollView style={styles.scrollCt}>
        <View style={styles.inputCt}>
          <Text style={styles.label}>Online Ecommerce Limit</Text>
          <TextInput
            defaultValue={ecLimit}
            onChangeText={onChangeEC}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputCt}>
          <Text style={styles.label}>POS Limit</Text>
          <TextInput
            defaultValue={posLimit}
            onChangeText={onChangePos}
            style={[styles.textInput, { color: "#bcbcbc" }]}
          />
        </View>
        <View style={styles.inputCt}>
          <Text style={styles.label}>ATM Limit</Text>
          <TextInput
            defaultValue={atmLimit}
            onChangeText={onChangeAtm}
            style={[styles.textInput, { color: "#bcbcbc" }]}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default TransactionList;

const styles = StyleSheet.create({
  rootCt: {
    marginTop: 40,
    marginHorizontal: 50,
    flex: 1,
  },
  headerCt: {},
  header: {
    fontSize: 20,
  },
  scrollCt: {
    marginTop: 30,
    height: "100%",
  },
  textInput: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#ffffff",
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "#eeeeee",
    borderColor: "#E8E6E6",
    borderWidth: 2,
    borderLeftWidth: 0.95,
    borderRightWidth: 0.95,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    paddingBottom: 12,
  },
  inputCt: {
    paddingVertical: 23,
  },
});
