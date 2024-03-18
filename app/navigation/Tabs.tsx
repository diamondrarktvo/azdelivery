//IMPORT FROM NODE_MODULES
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//LOCAL IMPORT
import { TabParamList } from "./types";
import { Icon, Text } from "_shared";
import { useTheme } from "@shopify/restyle";
import { Theme } from "_theme";
import {
  CommandScreen,
  HomeScreen,
  LivraisonScreen,
  DeliveredScreen,
  ProfilScreen,
} from "_features";
import { specificValueForIos } from "_utils";

const Tab = createBottomTabNavigator<TabParamList>();

//types
interface TabRouteTypes {
  name: keyof TabParamList;
  component: React.FC<unknown>;
  tabLabel: string;
  icon: string;
}

//routes
const TABROUTES: TabRouteTypes[] = [
  {
    name: "home_screen",
    component: HomeScreen,
    tabLabel: "Dashboard",
    icon: "home",
  },
  {
    name: "command_screen",
    component: CommandScreen,
    tabLabel: "Commandes",
    icon: "assignment",
  },
  {
    name: "livraison_screen",
    component: LivraisonScreen,
    tabLabel: "En cours",
    icon: "delivery-dining",
  },
  {
    name: "delivered_screen",
    component: DeliveredScreen,
    tabLabel: "Livré",
    icon: "assignment-turned-in",
  },

  {
    name: "profil_screen",
    component: ProfilScreen,
    tabLabel: "Profil",
    icon: "person",
  },
];

const TabNavigation = () => {
  const theme = useTheme<Theme>();
  const { primary, black, white } = theme.colors;

  return (
    <Tab.Navigator
      initialRouteName="home_screen"
      screenOptions={{
        tabBarStyle: {
          height: specificValueForIos(90, 60),
          paddingVertical: 4,
        },
      }}
    >
      {TABROUTES.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            headerShown: false,
            tabBarItemStyle: {},
            tabBarIcon: ({ focused }) => (
              <Icon
                name={route.icon}
                color={focused ? white : primary}
                size={focused ? 16 : 22}
                containerStyle={
                  focused
                    ? { backgroundColor: primary, padding: 8, borderRadius: 30 }
                    : {}
                }
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text variant={"tertiary"} color={"primary"}>
                {route.tabLabel}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
