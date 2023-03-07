import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

function OutLineButton({ onPress, icon, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons
        icon={icon}
        style={styles.icon}
        size={18}
        color={COLORS.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutLineButton;
const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
    borderColor: COLORS.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: { marginRight: 6 },
  text: { color: COLORS.primary500 },
});
