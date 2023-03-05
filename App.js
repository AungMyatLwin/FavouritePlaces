import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import { COLORS } from "./constants/colors";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  name='add'
                  size={24}
                  color={COLORS.primary20}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen name='AddPlace' component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
