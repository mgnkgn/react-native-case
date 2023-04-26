import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function BalanceHeader() {
  return (
    <View style={styles.headerMain}>
      <LinearGradient
        colors={["#3b3b3b", "#222221", "#0d0d0d", "#000000"]}
        style={styles.headerInside}
      >
        <View style={styles.upper}>
          <Text style={styles.balance}>Your Balance</Text>
          <Text style={styles.balanceNum}>$ 27317</Text>
        </View>
        <View style={styles.lower}>
          <View style={styles.lowerCol}>
            <Pressable
              style={({ pressed }) => [
                styles.iconCt,
                pressed && styles.pressed,
              ]}
            >
              <Ionicons name="wallet-outline" size={32} color="white" />
            </Pressable>
            <Text style={styles.lowerText}>Pay</Text>
          </View>
          <View style={styles.lowerCol}>
            <Pressable
              style={({ pressed }) => [
                styles.iconCt,
                pressed && styles.pressed,
              ]}
            >
              <MaterialCommunityIcons
                name="swap-horizontal"
                size={32}
                color="white"
              />
            </Pressable>
            <Text style={styles.lowerText}>Transfer</Text>
          </View>
          <View style={styles.lowerCol}>
            <Pressable
              style={({ pressed }) => [
                styles.iconCt,
                pressed && styles.pressed,
              ]}
            >
              <MaterialCommunityIcons
                name="hand-coin-outline"
                size={32}
                color="white"
              />
            </Pressable>
            <Text style={styles.lowerText}>Request</Text>
          </View>
          <View style={styles.lowerCol}>
            <Pressable
              style={({ pressed }) => [
                styles.iconCt,
                pressed && styles.pressed,
              ]}
            >
              <MaterialCommunityIcons
                name="credit-card-multiple-outline"
                size={32}
                color="white"
              />
            </Pressable>
            <Text style={styles.lowerText}>My Card</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default BalanceHeader;

const styles = StyleSheet.create({
  headerMain: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d0d0d",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingTop: 0,
    height: "41%",
  },
  headerInside: {
    borderRadius: 18,
    width: "80%",
    height: "80%",
  },
  upper: {
    paddingVertical: 30,
    justifyContent: "space-between",
    height: "60%",
  },
  balance: {
    marginTop: 14,
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff",
  },
  balanceNum: {
    textAlign: "center",
    fontSize: 38,
    color: "#74d76b",
  },
  lower: {
    marginTop: 5,
    flexDirection: "row",
    width: "100%",
    height: "40%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lowerCol: {
    borderRadius: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  lowerText: {
    color: "#ffffff",
  },
  iconCt: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#252525",
  },
  pressed: {
    opacity: 0.7,
  },
});
