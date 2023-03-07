import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/colors";
import OutLineButton from "../ui/OutlineButton";

function LocationPicker() {
  function getLocationHandler() {}
  function pickOnMapHandler() {}
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutLineButton icon='location' onPress={getLocationHandler}>
          Locate User
        </OutLineButton>
        <OutLineButton icon='map' onPress={pickOnMapHandler}>
          Pick on Map
        </OutLineButton>
      </View>
    </View>
  );
}

export default LocationPicker;
const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
