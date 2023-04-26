import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function MyCardMidRow() {
  return (
    <View style={styles.rootCt}>
      <View style={styles.col}>
        <Pressable
          style={({ pressed }) => [styles.iconCt, pressed && styles.pressed]}
        >
          <Ionicons name="shield-checkmark" size={24} color="black" />
        </Pressable>
        <Text style={styles.infoText}>Pin Change</Text>
      </View>
      <View style={styles.col}>
        <Pressable
          style={({ pressed }) => [styles.iconCt, pressed && styles.pressed]}
        >
          <Fontisto name="locked" size={24} color="black" />
        </Pressable>
        <Text style={styles.infoText}>Lock Card</Text>
      </View>
      <View style={styles.col}>
        <Pressable
          style={({ pressed }) => [styles.iconCt, pressed && styles.pressed]}
        >
          <FontAwesome name="bank" size={24} color="black" />
        </Pressable>
        <Text style={styles.infoText}>Add Money</Text>
      </View>
    </View>
  );
}

export default MyCardMidRow;

const styles = StyleSheet.create({
  rootCt: {
    marginHorizontal: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconCt: {
    backgroundColor: "#e8e8e8",
    padding: 14,
    minWidth: 62,
    minHeight: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  infoText: {
    marginTop: 5,
    color: "#000000",
    fontSize: 12,
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.7,
  },
});
