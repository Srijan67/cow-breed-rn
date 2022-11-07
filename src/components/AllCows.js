import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const AllCows = () => {
  return (
    <View>
      <View style={style.head}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Cows</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "700" }}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={style.card}>
          <View style={style.content}>
            <Ionicons name="add-circle-outline" size={60} color="black" />
            <Text style={{ fontWeight: "700", fontSize: 16 }}>Add new</Text>
          </View>
        </View>
        <View style={style.card}>
          <View style={style.content}>
            <Image
              style={{ height: 96, width: 92 }}
              source={require("../../assets/rect1.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>Breed 1</Text>
            <Text style={{ fontWeight: "700", fontSize: 14 }}>20</Text>
          </View>
        </View>
        <View style={style.card}>
          <View style={style.content}>
            <Image
              style={{ height: 96, width: 92 }}
              source={require("../../assets/rect1.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>Breed 2</Text>
            <Text style={{ fontWeight: "700", fontSize: 14 }}>10</Text>
          </View>
        </View>
        <View style={style.card}>
          <View style={style.content}>
            <Image
              style={{ height: 96, width: 92 }}
              source={require("../../assets/rect1.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>Breed 3</Text>
            <Text style={{ fontWeight: "700", fontSize: 14 }}>20</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllCows;
const style = StyleSheet.create({
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    backgroundColor: "#F7F8FD",
    borderRadius: 8,
    width: 116,
    height: 132,
    textAlign: "center",
    marginLeft: 10,
    marginTop: 10,
    paddingBottom: 4,
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
