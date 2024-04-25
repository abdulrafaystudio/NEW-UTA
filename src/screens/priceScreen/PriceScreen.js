import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Label, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { SCREEN } from '../../data/enums'

const PriceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppHeader
                style={styles.header}
                leftComp={<Pressable onPress={() => navigation.goBack()}>
                    <SVG.BackArrowActive />
                </Pressable>}
            />

            <Label style={styles.heading}>Set your price per seat</Label>

            <Label style={styles.recomendBlock}>Recommended price $14-$16</Label>
            <Label style={styles.recomendText}>Perfect price for this ride! You’ll get passengers in no time.</Label>


            <Pressable style={styles.stopPricingBlock}>
                <Label style={styles.stopPricingText}>Stopover prices</Label>
                <SVG.ForwardIcon />
            </Pressable>

            <MapForwardBtn onPress={() => navigation.navigate(SCREEN.RETURN)} />

        </View>
    )
}

export default PriceScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.purple,
        height: hp(100),
        padding: wp(4),
    },
    heading: {
        ...TEXT_STYLE.title,
        marginHorizontal: wp(4),
    },

    recomendBlock: {
        marginHorizontal: wp(4),
        ...TEXT_STYLE.smallText,
        backgroundColor: COLOR.green,
        width: wp(45),
        paddingVertical: hp(1),
        textAlign: 'center',
        borderRadius: wp(3)
    },
    recomendText: {
        ...TEXT_STYLE.text,
        color: COLOR.lightGrey,
        marginHorizontal: wp(5),
        marginTop: hp(1)
    },
    stopPricingText: {
        ...TEXT_STYLE.text
    },
    stopPricingBlock: {
        borderTopWidth: 3,
        borderColor: COLOR.lightGrey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: hp(3)
    }
})