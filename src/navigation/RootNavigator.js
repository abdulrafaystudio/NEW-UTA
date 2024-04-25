import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN, TAB } from '../data/enums'
import { BestPlacesScreen, CalenderScreen, ChangePasswordScreen, InstantBookingScreen, LoginScreen, MapRouteScreen, MapScreen, PassengerScreen, PayoutMethodScreen, PriceScreen, ReturnRideScreen, SignUpScreen, SplashScreen, StopOverScreen, TimeScreen, ViewMapScreen } from '../screens'
import BottomNavigator from './BottomNavigator'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name={SCREEN.SPLASH} component={SplashScreen} />
                <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
                <Stack.Screen name={SCREEN.SIGN_UP} component={SignUpScreen} />
                {/* <Stack.Screen name={SCREEN.PROFILE_ABOUT} component={ProfileAboutScreen} /> */}
                <Stack.Screen name={TAB.BOTTOM} component={BottomNavigator} />
                <Stack.Screen name={SCREEN.CHANGE_PASSWORD} component={ChangePasswordScreen} />
                <Stack.Screen name={SCREEN.PAYOUT_METHOD} component={PayoutMethodScreen} />
                {/* <Stack.Screen name={SCREEN.SIGN_UP} component={SignUpScreen} /> */}
                <Stack.Screen name={SCREEN.MAP} component={MapScreen}/>
                <Stack.Screen name={SCREEN.MAPVIEW} component={ViewMapScreen}/>
                <Stack.Screen name={SCREEN.MAPROUTE} component={MapRouteScreen}/>
                <Stack.Screen name={SCREEN.STOP_OVER} component={StopOverScreen}/>
                <Stack.Screen name={SCREEN.BEST_PLACES} component={BestPlacesScreen}/>
                <Stack.Screen name={SCREEN.PASSENGER} component={PassengerScreen}/>
                <Stack.Screen name={SCREEN.INSTANT_BOOKING} component={InstantBookingScreen}/>
                <Stack.Screen name={SCREEN.CALENDER} component={CalenderScreen}/>
                <Stack.Screen name={SCREEN.TIME} component={TimeScreen}/>
                <Stack.Screen name={SCREEN.PRICE} component={PriceScreen}/>
                <Stack.Screen name={SCREEN.RETURN} component={ReturnRideScreen}/>



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator
