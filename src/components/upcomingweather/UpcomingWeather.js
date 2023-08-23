import React from "react";
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

const data = [
  {
    dt_txt: "2022-08-30 16:00:00",
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 16:00:00",
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 16:00:00",
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
  },
];

const Item = (props) => {
  const { dt_txt, temp_max, temp_min, description } = props;

  return (
    <>
      <View style={style.item}>
        <Text style={style.dt_txt}>{dt_txt}</Text>
        <Text style={style.max}>{temp_max}</Text>
        <Text style={style.max}>{temp_min}</Text>
      </View>
    </>
  );
};
const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      // condition={item.condition.weather[0].main}
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
          <FlatList data={data} renderItem={renderItem} />
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
    marginTop: StatusBar.currentHeight || 0,
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
    backgroundColor: "pink",
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
});

export default UpcomingWeather;
