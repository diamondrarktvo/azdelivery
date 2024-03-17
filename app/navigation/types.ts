import { NavigatorScreenParams } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";

export interface StackNavigationConfig {
  screenOptionsForCustomHiddenHeader: StackNavigationOptions;
  screenOptionsForHiddenHeader: StackNavigationOptions;
  screenOptionsForDisplayedHeader: StackNavigationOptions;
}

export type StackParamList = {
  main_tab: NavigatorScreenParams<TabParamList>;
  login_screen: undefined;
  register_screen: undefined;
  forgot_password_screen: undefined;
};

export type TabParamList = {
  home_screen: undefined;
  profil_screen: undefined;
  command_screen: undefined;
  livraison_screen: undefined;
  delivered_screen: undefined;
};

// To type the navigation object obtained from useNavigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
