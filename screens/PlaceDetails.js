import { Image, ScrollView, StyleSheet, View } from "react-native";
// import { View } from "react-native-web";
import OutLineButton from "../components/ui/OutlineButton";

function PlaceDetails() {
  function showOnMapHandler() {}
  return (
    <ScrollView>
      <View>
        <View>
          <Text>address</Text>
        </View>
        <OutLineButton icon='map' onPress={showOnMapHandler}>
          View on Map
        </OutLineButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({});
