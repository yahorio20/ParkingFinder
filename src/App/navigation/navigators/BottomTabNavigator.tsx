import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { bottomTabsRoutes } from "../routes/bottomTabsRoutes";
import { ROUTES } from "@shared/api";

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName={ROUTES.MapScreen}
			screenOptions={{ headerShown: false }}
		>
			{bottomTabsRoutes.map((route, index) => (
				<BottomTabs.Screen
					key={index}
					name={route.name}
					component={route.component}
					options={route.options}
				/>
			))}
		</BottomTabs.Navigator>
	);
};

export default BottomTabNavigator;