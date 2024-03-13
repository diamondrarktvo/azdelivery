//IMPORT FROM NODE_MODULES
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//LOCAL IMPORT
import { TabParamList } from "./types";
import { Icon, Text } from "_shared";
import { useTheme } from "@shopify/restyle";
import { Theme } from "_theme";
import {
  CommandScreen,
  LivraisonScreen,
  MapScreen,
  ProfilScreen,
} from "_features";

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
    name: "command_screen",
    component: CommandScreen,
    tabLabel: "Commandes",
    icon: "assignment",
  },
  {
    name: "livraison_screen",
    component: LivraisonScreen,
    tabLabel: "Livraisons",
    icon: "delivery-dining",
  },
  {
    name: "map_screen",
    component: MapScreen,
    tabLabel: "Map",
    icon: "public",
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
      initialRouteName="command_screen"
      screenOptions={{
        tabBarStyle: {
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
                color={primary}
                size={focused ? 28 : 20}
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
