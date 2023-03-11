import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { COLORS } from "../../constants/colors";
import OutLineButton from "../ui/OutlineButton";

function ImagePicker({ onTakeImage }) {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant camera permission to use this app"
      );
      return false;
    }
    return true;
  }
  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri);
  }
  let imageReview = <Text>No image taken yet.</Text>;
  if (imageReview) {
    imageReview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imageReview}</View>
      {/* <Button title='Take Image' onPress={takeImageHandler} /> */}
      <OutLineButton icon={"camera"} onPress={takeImageHandler}>
        Take Image{" "}
      </OutLineButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
