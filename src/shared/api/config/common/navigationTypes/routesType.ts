import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { NavigationProp } from "@react-navigation/native";

export type AuthorizedStackParamList = {
    MapScreen: undefined;
    AddParkScreen: undefined;
    DrawerNavigator: undefined;
    ParkListScreen: undefined;
};

export type UnauthorizedStackParamList = {
    EmailAuthScreen: undefined;
    PhoneAuthScreen: undefined;
    OTPVerifyScreen: { confirmation?: FirebaseAuthTypes.ConfirmationResult };
};

export type UnauthorizedStackRoutesProps = NativeStackScreenProps<UnauthorizedStackParamList, "OTPVerifyScreen">;
export type AuthorizedStackRoutesProps<T extends keyof AuthorizedStackParamList> = NativeStackScreenProps<
    AuthorizedStackParamList,
    T
>;

export type AuthorizedNavigationProps<T extends keyof AuthorizedStackParamList> = NavigationProp<
    AuthorizedStackParamList,
    T
>;

export enum InitialScreens {
    UnauthorizedInitialScreen = "EmailAuthScreen",
}

export enum ROUTES_NAMES {
    AddParkingScreen = "Add Parking",
    MapScreen = "Map",
}

export enum ROUTES {
    MapScreen = "MapScreen",
    AddParkingScreen = "AddParkingScreen",
    DrawerNavigator = "DrawerNavigator",
    ParkListScreen = "ParkListScreen",
    EmailAuthScreen = "EmailAuthScreen",
    PhoneAuthScreen = "PhoneAuthScreen",
    OTPVerifyScreen = "OTPVerifyScreen",
    BottomTabNavigator = "BottomTabNavigator",
}
