import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CurrentWeather from "./src/components/currentweather/CurrentWeather";
import UpcomingWeather from "./src/components/upcomingweather/UpcomingWeather";

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <CurrentWeather />
        {/* <UpcomingWeather /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
