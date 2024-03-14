//IMPORT FROM NODE_MODULES
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

//LOCAL IMPORT
import { stackNavigationConfig } from "./configStack";
import { StackParamList } from "./types";

//IMPORT NAVIGATION TAB
import TabNavigation from "./Tabs";
import { useAppDispatch, useAppSelector } from "_store";
import { ForgotPasswordScreen, LoginScreen, RegisterScreen } from "_features";
import { selectors as authSelectors } from "../features/auth/authSlice";

//IMPORT SCREEN

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
  const dispatch = useAppDispatch();
  const isUserLogged = useAppSelector(authSelectors.isUserLogged);

  return (
    <NavigationContainer>
      {isUserLogged ? (
        <Stack.Navigator initialRouteName={"main_tab"}>
          <Stack.Group
            screenOptions={stackNavigationConfig.screenOptionsForHiddenHeader}
          >
            <Stack.Screen name={"main_tab"} component={TabNavigation} />
            {/**top up screen home*/}
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={"login_screen"}>
          <Stack.Group
            screenOptions={
              stackNavigationConfig.screenOptionsForCustomHiddenHeader
            }
          >
            <Stack.Screen name={"login_screen"} component={LoginScreen} />
            <Stack.Screen
              name={"forgot_password_screen"}
              component={ForgotPasswordScreen}
            />
            <Stack.Screen name={"register_screen"} component={RegisterScreen} />
          </Stack.Group>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default StackNavigation;
