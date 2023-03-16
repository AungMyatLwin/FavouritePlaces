import { useEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
// import { View } from "react-native-web";
import OutLineButton from "../components/ui/OutlineButton";
import { COLORS } from "../constants/colors";

function PlaceDetails({ route }) {
  function showOnMapHandler() {}
  const selectedPlaceId = route.params.placeId;
  useEffect(() => {}, [selectedPlaceId]);
  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>address</Text>
        </View>
        <OutLineButton icon='map' onPress={showOnMapHandler}>
          View on Map
        </OutLineButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },

  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: COLORS.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
