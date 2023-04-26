import { Image, StyleSheet, Text, View } from "react-native";

function TransactionItem({ transaction, img }) {
  return (
    <View style={styles.rootCt}>
      <View style={styles.imageCt}>
        <Image
          source={img}
          style={{
            height: 25,
            width: 25,
            borderRadius: 50,
            padding: 0,
            objectFit: "contain",
          }}
        />
      </View>
      <View style={styles.rightCt}>
        <View style={styles.infoCt}>
          <Text style={styles.infoHeader}>{transaction.header}</Text>
          <View>
            <Text style={styles.infoTime}>{transaction.time} PM</Text>
          </View>
        </View>
        <View>
          <Text style={styles.cost}>${transaction.cost}</Text>
        </View>
      </View>
    </View>
  );
}

export default TransactionItem;

const styles = StyleSheet.create({
  rootCt: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // marginHorizontal: 20,
    paddingVertical: 20,
  },
  imageCt: {
    backgroundColor: "#E5DFDF",
    padding: 14,
    borderRadius: 8,
  },
  infoCt: {
    flex: 1,
    paddingHorizontal: 10,
  },
  infoHeader: {
    fontWeight: "500",
    fontSize: 14,
  },
  infoTime: {
    color: "#ADACAC",
    fontSize: 12,
    fontWeight: "500",
  },
  rightCt: {
    flex: 1,
    borderBottomWidth: 0.7,
    borderBottomColor: "#ADACAC",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "150%",
    marginLeft: 10,
  },
  cost: {
    fontWeight: "400",
    fontSize: 24,
  },
});
