import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
const AddNew = ({ navigation }) => {
  const animation = useRef(null);

  const [tagId, setTagId] = useState("#1212");
  const [breedName, setBreedName] = useState("Lorem ipsum");
  const [cowsNum, setCowsNum] = useState("20");
  const [done, setDone] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{ marginRight: 3 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);
  return (
    <View style={{ minHeight: "100%", backgroundColor: "#fff" }}>
      <View style={style.box}>
        <View style={style.displayPic} />
        <TouchableOpacity style={style.camArea}>
          <Feather name="camera" size={20} color="#999" />
        </TouchableOpacity>
        <View style={style.textView}>
          <Text style={style.inputhead}>Tag ID</Text>
          <TextInput
            style={style.inputs}
            value={tagId}
            onChangeText={(e) => setTagId(e)}
            placeholder="Enter ID"
          />
        </View>
        <View style={style.textView}>
          <Text style={style.inputhead}>Breed Name</Text>
          <TextInput
            style={style.inputs}
            value={breedName}
            onChangeText={(e) => setTagId(e)}
            placeholder="Enter Breed Name"
          />
        </View>
        <View style={style.textView}>
          <Text style={style.inputhead}>No. of cows</Text>
          <TextInput
            style={style.inputs}
            value={cowsNum}
            onChangeText={(e) => setTagId(e)}
            placeholder="Enter No. of cows"
          />
        </View>
      </View>
      <TouchableOpacity
        style={style.btnSubmit}
        onPress={() => {
          setDone(true);
          animation.current?.reset();
          animation.current?.play();
        }}
      >
        <Text style={style.textSubmit}>Done</Text>
      </TouchableOpacity>

      <Modal visible={done} transparent={true} animationType="fade">
        <View style={style.lottieStyle}>
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={() => {
              setDone(false);
              return navigation.goBack();
            }}
            ref={animation}
            style={{
              width: 200,
              height: 200,
              backgroundColor: "#eee",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            source={require("../../assets/87929-tick.json")}
          />
        </View>
      </Modal>
    </View>
  );
};

export default AddNew;
const style = StyleSheet.create({
  box: {
    backgroundColor: "#F7F8FD",
    borderRadius: 15,
    marginHorizontal: 16,
    marginTop: 15,
    padding: 10,
    paddingBottom: 8,
  },
  displayPic: {
    width: 94,
    height: 92,
    backgroundColor: "#fff",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
  },
  camArea: {
    backgroundColor: "#fff",
    padding: 6,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    position: "relative",
    top: -10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    elevation: 7,
    shadowOpacity: 1,
    shadowRadius: 10,
    marginBottom: 5,
  },
  textView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 21,
  },
  inputs: {
    borderRadius: 8,
    width: "70%",
    backgroundColor: "#fff",
    fontWeight: "700",
    paddingHorizontal: 9,
    fontSize: 13,
  },
  inputhead: {
    fontWeight: "500",
    color: "#999",
  },
  btnSubmit: {
    marginTop: "auto",
    marginLeft: "auto",
    backgroundColor: "#47CD75",
    // paddingHorizontal: 30,
    // paddingVertical: 10,
    width: 115,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 39,
    marginRight: 16,
  },
  textSubmit: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  lottieStyle: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
