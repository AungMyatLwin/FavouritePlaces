import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import { COLORS } from "./constants/colors";
import Map from "./screens/Map";
import { useEffect, useState } from "react";
import { init } from "./util/database";
import AppLoading from "expo-app-loading";
import PlaceDetails from "./screens/PlaceDetails";

const Stack = createNativeStackNavigator();
export default function App() {
  const [dbInit, setDbInit] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInit(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!dbInit) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.primary500,
            },
            headerTintColor: COLORS.gray700,
            contentStyle: {
              backgroundColor: COLORS.gray700,
            },
          }}
        >
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favourite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  name='add'
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name='AddPlace'
            component={AddPlace}
            options={{
              title: "Add a new Place",
            }}
          />
          <Stack.Screen
            name='PlaceDetails'
            component={PlaceDetails}
            options={{
              title: "Detail Place",
            }}
          />
          <Stack.Screen name='Map' component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
