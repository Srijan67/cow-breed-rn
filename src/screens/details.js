import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
const Details = ({ navigation }) => {
  const animation = useRef(null);

  const [tagId, setTagId] = useState("#1212");
  const [name, setName] = useState("Lorem ipsum");
  const [breed, setBreed] = useState("Hariana");
  const [dob, setDob] = useState("12-03-2020");
  const [weight, setWeight] = useState("120 Kg");
  const [done, setDone] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              style={{ marginRight: 10 }}
              name="chevron-back"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);
  return (
    <View style={{ minHeight: "100%", backgroundColor: "#fff" }}>
      <View style={style.box}>
        {/* <View style={style.displayPic} /> */}
        <Image
          style={{
            width: 94,
            height: 92,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          source={require("../../assets/white-cow.png")}
        />
        <View style={style.camArea}>
          <Feather name="camera" size={20} color="#999" />
        </View>
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
          <Text style={style.inputhead}>Name</Text>
          <TextInput
            style={style.inputs}
            value={name}
            onChangeText={(e) => setTagId(e)}
            placeholder="Enter Name"
          />
        </View>
        <View style={style.textView}>
          <Text style={style.inputhead}>Breed</Text>
          <TextInput
            style={style.inputs}
            value={breed}
            onChangeText={(e) => setTagId(e)}
            placeholder="Enter Breed"
          />
        </View>
        <View style={style.textView}>
          <Text style={style.inputhead}>Date of birth</Text>
          <TextInput
            style={style.inputs}
            value={dob}
            onChangeText={(e) => setDob(e)}
            placeholder="Enter DOB"
          />
        </View>
        <View style={style.textView}>
          <Text style={style.inputhead}>Weight</Text>
          <TextInput
            style={style.inputs}
            value={weight}
            onChangeText={(e) => setWeight(e)}
            placeholder="Enter Weight"
          />
        </View>
      </View>
      <View style={style.box}>
        <View style={[style.textView, { marginBottom: 0, borderRadius: 15 }]}>
          <Text>Medical Details</Text>
          <TouchableOpacity>
            <AntDesign
              style={{ marginLeft: "auto" }}
              name="right"
              size={20}
              color="#47CD75"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.box}>
        <View style={[style.textView, { marginBottom: 0, borderRadius: 15 }]}>
          <Text>Parental Details</Text>
          <TouchableOpacity>
            <AntDesign
              style={{ marginLeft: "auto" }}
              name="right"
              size={20}
              color="#47CD75"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.box}>
        <View style={[style.textView, { marginBottom: 0, borderRadius: 15 }]}>
          <Text>Ownership</Text>
          <TouchableOpacity>
            <AntDesign
              style={{ marginLeft: "auto" }}
              name="right"
              size={20}
              color="#47CD75"
            />
          </TouchableOpacity>
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

      <Modal visible={done} transparent={true}>
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

export default Details;
const style = StyleSheet.create({
  box: {
    backgroundColor: "#F7F8FD",
    borderRadius: 15,
    marginHorizontal: 16,
    marginTop: 15,
    padding: 10,
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
    padding: 7,
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
  },
  textView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputs: {
    borderRadius: 8,
    width: "70%",
    backgroundColor: "#fff",
    fontWeight: "700",
    paddingHorizontal: 10,
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
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
