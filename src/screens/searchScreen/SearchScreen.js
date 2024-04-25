import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, DatePicker, Image, Label, Pressable, Scrollable } from '../../components'
import { COLOR, hp, TEXT_STYLE, wp, commonStyles } from '../../data/StyleGuides'
import En from '../../data/locals/En'
import { IMAGES } from '../../assets/images'
import LinearGradient from 'react-native-linear-gradient'
import { SVG } from '../../assets/svg'


const SearchScreen = (props) => {
    const { navigation } = props
    const { seats: numberOfSeats = 0 } = props.route.params || {};

    return (
        <Scrollable hasInput containerStyle={styles.container}>
            <Label style={styles.pickText}>{En.pickRides}</Label>
            <Image src={IMAGES.SearchBackground} style={styles.imageView} />
            <View style={styles.mainScreen}>

                <LinearGradient
                    colors={[COLOR.blue, COLOR.pink]}
                    locations={[0.5, 1]} // Start color 1 at middle, color 2 at the end
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0 }} // Start at the top
                    end={{ x: 0, y: 1 }}   // End at the bottom
                >

                    <View style={styles.travelingView}>
                        <SVG.Location width={25} height={25} />
                        <Pressable style={{ marginLeft: wp(2), }}>
                            <Label style={styles.leavingText}>{'Leaving from'}</Label>
                            <Label style={styles.labelColor}>{'leaving From' || ""}</Label>
                        </Pressable>
                    </View>

                    <View style={styles.travelingView}>
                        <SVG.Location width={25} height={25} />
                        <Pressable style={{ marginLeft: wp(2), }}>
                            <Label style={styles.leavingText}>{'Going To'}</Label>
                            <Label style={styles.labelColor}>{'leaving To' || ""}</Label>
                        </Pressable>
                    </View>

                    <Pressable style={styles.dateContainer} >
                        <Label style={styles.dateText}>{'Date'}</Label>
                        <DatePicker mode={"date"}/>
                    </Pressable>

                    <View style={styles.travelerContainer}>
                        <Label style={{ marginTop: hp(0.4) }}>{'Travelers'}</Label>
                        <Pressable style={styles.travelerNoShownBlock}>
                            <Label style={{ color: COLOR.white }}>{numberOfSeats}</Label>
                            <SVG.DropDown width={17} height={17} />
                        </Pressable>
                    </View>

                </LinearGradient>
                <Button text={'Search'} style={styles.buttonContainer} />
            </View>
        </Scrollable>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.purple,
        height: hp(100),
    },
    pickText: {
        textAlign: 'center',
        ...TEXT_STYLE.title,
        paddingHorizontal: '15%'
    },
    imageView: {
        width: wp(100),
        height: hp(21)
    },
    linearGradient: {
        // width: hp(41.5),
        height: hp(35),
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: hp(3)
    },
    mainScreen: {
        paddingHorizontal: '5%',
    },
    travelingView: {
        height: hp(6.5),
        borderWidth: 0.5,
        // marginBottom: hp(1),
        borderRadius: 10,
        borderColor: COLOR.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(5),
        marginBottom: hp(1.5)
    },
    leavingText: {
        ...TEXT_STYLE.textMedium
    },
    labelColor: {
        ...TEXT_STYLE.bigTextMedium,
        lineHeight: hp(2.5)
    },
    dateContainer: {
        height: hp(6.5),
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: COLOR.white,
        paddingHorizontal: wp(5),
        marginBottom: hp(1.5)
    },
    dateText: {
        ...TEXT_STYLE.textBold,
        marginTop: hp(0.5)
    },
    travelerNoShownBlock: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    travelerContainer: {
        height: hp(6.5),
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: COLOR.white,
        paddingHorizontal: wp(5),
        marginBottom: hp(1.5)
    },
    buttonContainer: {
        height: hp(6),
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginTop: 0,
        backgroundColor: COLOR.blue,
    },
})