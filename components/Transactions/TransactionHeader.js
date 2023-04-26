import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [40, 50, 28, 60, 75, 33, 43],
      colors: [
        (opacity = 1) => `#252525`,
        (opacity = 1) => `#252525`,
        (opacity = 1) => `#252525`,
        (opacity = 1) => `#252525`,
        (opacity = 1) => `#6fdb65`,
        (opacity = 1) => `#252525`,
        (opacity = 1) => `#252525`,
      ],
    },
  ],
};

function TransactionHeader() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerUpper}>
        <Text style={styles.textHeader}>Transactions</Text>
        <View style={styles.optsCt}>
          <Pressable
            style={({ pressed }) => [
              styles.optCtSelected,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.optSelected}>1W</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.optCt, pressed && styles.pressed]}
          >
            <Text style={styles.opt}>1M</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.optCt, pressed && styles.pressed]}
          >
            <Text style={styles.opt}>3M</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.optCt, pressed && styles.pressed]}
          >
            <Text style={styles.opt}>1Y</Text>
          </Pressable>
        </View>
      </View>
      <BarChart
        style={{
          //   marginTop: 20,
          marginRight: 50,
        }}
        data={data}
        width={screenWidth}
        height={230}
        chartConfig={{
          backgroundColor: "transparent",
          backgroundGradientTo: "white",
          backgroundGradientFromOpacity: 0,
          backgroundGradientFrom: "white",
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `#FFFFFF`,
          barPercentage: 0.78,
          barRadius: 5,
          groupSpacing: 0.3,
        }}
        withHorizontalLabels={false}
        fromZero={true}
        withCustomBarColorFromData={true}
        flatColor={true}
        withInnerLines={false}
        showBarTops={false}
        showValuesOnTopOfBars={false}
      />
    </View>
  );
}

export default TransactionHeader;

const styles = StyleSheet.create({
  headerMain: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d0d0d",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingTop: 0,
    height: "45%",
  },

  headerUpper: {
    width: "52%",
    marginTop: 50,
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  textHeader: {
    color: "#ffffff",
    marginTop: 30,
    height: "100%",
    fontSize: 23,
  },
  optsCt: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "120%",
    marginTop: 30,
    height: 70,
    padding: 0,
  },
  optCt: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242424",
    height: 30,
    paddingHorizontal: 15,
    borderRadius: 18,
  },
  optCtSelected: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: 30,
    paddingHorizontal: 15,
    borderRadius: 18,
  },
  opt: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  optSelected: {
    color: "#000000",
    // backgroundColor: "#ffffff",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
});
