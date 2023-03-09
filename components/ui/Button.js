import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
import { COLORS } from "../../constants/colors";

function Button({ onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: COLORS.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: COLORS.primary50,
  },
});
