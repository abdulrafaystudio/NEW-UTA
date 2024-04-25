import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'

const InstantBookingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <AppHeader
                style={styles.header}
                leftComp={<Pressable onPress={() => navigation.goBack()}>
                    <SVG.BackArrowActive />
                </Pressable>}
            />

            <Label style={styles.heading}>More convenience</Label>

            <Pressable style={styles.passengerBlock}>
                <SVG.BellIcon />
                <View style={styles.textContainer}>
                    <Label style={styles.upperText}>Women only</Label>
                    <Label style={styles.lowerText}>No need to review every passengers request before it expires</Label>
                </View>
            </Pressable>

            <Pressable style={styles.passengerBlock}>
                <SVG.BellIcon />
                <View style={styles.textContainer}>
                    <Label style={styles.upperText}>Get more passengers</Label>
                    <Label style={styles.lowerText}>They prefer to get an instant answer</Label>
                </View>
            </Pressable>

            <Pressable style={styles.instantBlock}>
                <Label style={styles.instantText}>Enable Instant Booking</Label>
                <SVG.ForwardIcon />
            </Pressable>


        </View>
    )
}

export default InstantBookingScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.purple,
        height: hp(100),
        padding: wp(4)
    },
    heading: {
        ...TEXT_STYLE.title,
        marginHorizontal: wp(4)
    },
    passengerBlock: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: wp(4)
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: wp(4),
        padding: wp(3),
    },
    upperText: {
        ...TEXT_STYLE.smallText,
        fontSize: hp(1.75)
    },
    lowerText: {
        ...TEXT_STYLE.smallText,
        color: COLOR.lightGrey,
        fontSize: hp(1.75)
    },
    instantText:{
        ...TEXT_STYLE.text,
        color:COLOR.blue,
        fontSize:hp(1.80)
    },
    instantBlock:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:wp(5),
        marginTop:hp(2)
        
    }
})