import MapView from "react-native-maps";

function Map() {
  const region = {
    latitude: 24.554,
    longitude: 42.566,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView initialRegion={region}></MapView>;
}

export default Map;
