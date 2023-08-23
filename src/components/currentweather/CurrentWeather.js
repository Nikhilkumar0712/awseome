import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
const CurrentWeather = () => {
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels like 5</Text>
          <Text style={styles.highLow}>High 8 low 6</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.bottomText}>Its Sunny</Text>
          <Text style={styles.bottomSubHeading}>
            Its perfect T-shirt weather
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CurrentWeather;
