import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text } from "react-native";
import IndexScreen from "./IndexScreen";
// Import các màn hình
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Order") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Index") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#4A90E2",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Order" component={CartScreen} />
        <Tab.Screen name="Index" component={IndexScreen} />

        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
