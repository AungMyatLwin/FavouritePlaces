import { Alert, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";
import OutLineButton from "../ui/OutlineButton";
// import { WebView } from "react-native-webview";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useEffect, useState } from "react";
import { getAddress, getMapPreview } from "../../util/location";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/core";
import MapView from "react-native-maps";
function LocationPicker({ onPickLocation }) {
  const [pickedLocation, setPickedLocation] = useState({});
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const route = useRoute();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng
        );
        onPickLocation({ ...pickedLocation, address: address });
      }
    }
    handleLocation();
  }, [pickedLocation, onPickLocation]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant location permission to use this app"
      );
      return false;
    }
    return true;
  }
  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location);
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }
  function pickOnMapHandler() {
    navigation.navigate("Map");
  }
  const region = {
    latitude: 16.7773425,
    longitude: 96.1689462,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  let locationPreview = <Text>No location picked yet.</Text>;
  if (locationPreview) {
    locationPreview = (
      // <Image source={{ uri: getMapPreview(
      //   pickedLocation.lat,
      //       pickedLocation.lng
      // ) }} style={styles.image} /> will return location from google api
      <MapView initialRegion={region} style={styles.image}></MapView>
      // <Text>{getMapPreview(pickedLocation.lat, pickedLocation.lng)}</Text>
    );
  }
  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
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
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
