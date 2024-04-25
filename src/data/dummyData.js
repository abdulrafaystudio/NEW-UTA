import { SVG } from "../assets/svg";
import { SCREEN, TAB } from "./enums";
import En from "./locals/En";

export const bottomIcons = {
    [TAB.SEARCH]: { iconName: <SVG.SearchNonActive />, activeIcon: <SVG.SearchActive />, title: 'Search' },
    [TAB.PUBLISH]: { iconName: <SVG.PublishNonActive />, activeIcon: <SVG.PublishActive />, title: 'Publish' },
    [TAB.INBOX]: { iconName: <SVG.InboxNonActive />, activeIcon: <SVG.InboxActive />, title:'Inbox' },
    [TAB.PROFILE_ABOUT]: { iconName: <SVG.ProfileNonActive />, activeIcon: <SVG.ProfileActive />, title: 'Profile' },
};

export const verifyProfileData = [
    { text: En.verifyId , icon: <SVG.AddIcon /> },
    { text: En.confirmEmail , icon: <SVG.AddIcon /> },
    { text: En.confirmPhoneNumber , icon: <SVG.AddIcon /> },
]

export const aboutYouData = [
    { text: En.addMiniBio , icon: <SVG.AddIcon /> },
    { text: En.addTravel , icon: <SVG.AddIcon /> },
]

export const vehiclesData = [
    { text: En.addVehicles , icon: <SVG.AddIcon /> },
]
export const ratingData = [
    { text: En.rating , icon: <SVG.ForwardActive /> },
]

export const passwordData = [
    { text: En.password , icon: <SVG.ForwardActive/>,route: SCREEN.CHANGE_PASSWORD },
    { text: En.postalAddress , icon: <SVG.ForwardActive /> },
]

export const payoutData = [
    { text: En.payoutMethod , icon: <SVG.ForwardActive />, route: SCREEN.PAYOUT_METHOD },
    { text: En.payouts , icon: <SVG.ForwardActive /> },
    { text: En.paymentMethods , icon: <SVG.ForwardActive /> },
    { text: En.paymentRefunds , icon: <SVG.ForwardActive /> },
]

export const rateData = [
    { text: En.rateApp , icon: <SVG.ForwardActive /> },
    { text: En.help , icon: <SVG.ForwardActive />, route: SCREEN.Help },
    { text: En.termCondition , icon: <SVG.ForwardActive /> },
    { text: En.dataProtection , icon: <SVG.ForwardActive /> , route: SCREEN.DATA_PROTECTION},
]

export const countryNameData=[
    {text: En.london, route:SCREEN.MAP},
    {text: En.southAfrica,route:SCREEN.MAP},
    {text: En.pakistan,route:SCREEN.MAP},
]

export const routeRareData =[
    {time: En.routeTime1, km: En.routeKm1,},
    {time: En.routeTime2, km: En.routeKm2},
    {time: En.routeTime3, km: En.routeKm3},
]



