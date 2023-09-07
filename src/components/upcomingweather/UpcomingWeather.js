import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";

import moment from "moment";

import { weatherType } from "../../utilities/Weather-Type";

const Item = (props) => {
  const { dt_txt, temp_min, temp_max, condition } = props;
  const { item, date, temp, dateTextWrapper } = style;
  return (
    <>
      <View style={item}>
        <Feather
          name={weatherType[condition]?.icon}
          size={50}
          color={"white"}
        />
        <View style={dateTextWrapper}>
          <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
          <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
        </View>
        <Text style={temp}>{`${Math.round(temp_min)}° / ${Math.round(
          temp_max
        )}°`}</Text>
      </View>
    </>
  );
};
const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0]?.main}
      dt_txt={item.dt_txt}
      temp_min={item.main.temp_min}
      temp_max={item.main.temp_max}></Item>
  );

  return (
    <>
      <SafeAreaView style={style.container}>
        <ImageBackground
          source={require("../../../assets/authbg.png")}
          style={style.image}>
          <Text style={style.heading}>Up Coming Weather</Text>
          <FlatList data={weatherData} renderItem={renderItem} />
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: "black",
  },
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  dt_txt: {
    fontSize: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 5,
    backgroundColor: "indianred",
  },
  dt_txt: {
    color: "white",
    fontSize: 15,
  },
  max: {
    color: "white",
    fontSize: 20,
  },
  image: {
    flex: 1,
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});

export default UpcomingWeather;
