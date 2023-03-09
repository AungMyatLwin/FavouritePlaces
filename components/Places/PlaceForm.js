import { useState } from "react";
import { ScrollView, Text, View, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import Button from "../ui/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
  function savePlaceHandler() {}
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: COLORS.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: COLORS.primary700,
    borderBottomWidth: 2,
    backgroundColor: COLORS.primary100,
  },
});
