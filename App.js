import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Balance from "./screens/Balance";
import Transactions from "./screens/Transactions";
import MyCard from "./screens/MyCard";

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 0,
            },
          }}
        >
          <Tab.Screen name="Balance" component={Balance} />
          <Tab.Screen name="Transactions" component={Transactions} />
          <Tab.Screen name="MyCard" component={MyCard} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
