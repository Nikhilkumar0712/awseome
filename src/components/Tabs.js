import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CurrentWeather from "../../src/components/currentweather/CurrentWeather";
import UpcomingWeather from "../../src/components/upcomingweather/UpcomingWeather";
import City from "../../src/components/city/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  const { weather } = props;

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "lightblue",
          },
          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            color: "tomato",
          },
          headerTitleAlign: "center",
        }}>
        <Tab.Screen
          name="Current"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"droplet"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}>
          {() => <CurrentWeather weatherData={weather.list[0]} />}
        </Tab.Screen>
        <Tab.Screen
          name="Upcoming"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"clock"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}>
          {() => <UpcomingWeather weatherData={weather.list} />}
        </Tab.Screen>
        <Tab.Screen
          name="City"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"home"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}>
          {() => <City weatherData={weather.city} />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
