import MapView from "react-native-maps";

function Map(lat, lng) {
  console.log(lat, lng);
  const region = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView initialRegion={region}></MapView>;
}

export default Map;
