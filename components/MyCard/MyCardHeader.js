import { Image, StyleSheet, Text, View } from "react-native";

function MyCardHeader() {
  return (
    <View style={styles.rootCt}>
      <View style={styles.headerCt}>
        <Text style={styles.header}>My Card</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.card_row1}>
          <Text style={[styles.cardText, { fontSize: 12 }]}>Mastercard</Text>
        </View>
        <View style={styles.card_row2}>
          <Text style={[styles.cardText, styles.cardNum]}>6839</Text>
          <Text style={[styles.cardText, styles.cardNum]}>****</Text>
          <Text style={[styles.cardText, styles.cardNum]}>****</Text>
          <Text style={[styles.cardText, styles.cardNum]}>****</Text>
        </View>
        <View style={styles.card_row3}>
          <View styles={styles.row3_left}>
            <Text style={styles.cardText}>Valid Thru 01/27</Text>
          </View>
          <View styles={styles.row3_right}>
            <Image
              source={require("../../assets/img/mastercard-bg.png")}
              style={{
                width: 50,
                height: 50,
                marginBottom: -10,
              }}
            />
            <Text style={[styles.cardText, styles.mastercardText]}>
              mastercard
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MyCardHeader;

const styles = StyleSheet.create({
  rootCt: {
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: "center",
  },
  headerCt: {},
  header: {
    color: "#000000",
    fontSize: 18,
  },
  card: {
    minHeight: 150,
    marginTop: 20,
    backgroundColor: "#000000",
    width: "75%",
    elevation: 3,
    borderRadius: 23,
    padding: 10,
  },
  card_row1: {},
  card_row2: {
    marginTop: 5,
    flexDirection: "row",
    width: "100%",
    gap: 9,
  },
  card_row3: {
    marginTop: "auto",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 5,
  },
  row3_right: {
    gap: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  cardText: {
    color: "#ffffff",
    fontWeight: "500",
  },
  mastercardText: {
    fontSize: 7,
    textAlign: "center",
  },
  cardNum: {
    fontSize: 20,
    justifyContent: "center",
  },
});
