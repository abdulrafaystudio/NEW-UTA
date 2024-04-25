import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLOR, hp, wp } from '../../data/StyleGuides'
import { Image, Label, Pressable } from '../reusables'
import { SVG } from '../../assets/svg'



const ChatBubble = (props) => {
    const { item } = props
    return (
        <LinearGradient
            colors={[COLOR.purple, COLOR.pink]}
            locations={[0.45, 1]}
            style={styles.linearGradient}
            start={{ x: 0, y: 7 }}
            end={{ x: 1.2, y: 0.5 }}
        >

            <Image  style={styles.image} />

            <Label style={styles.title}></Label>

            <Pressable onPress={() => props.onpress()}>
                <SVG.ForwardActive  />
            </Pressable>




        </LinearGradient>
    )
}

export default memo(ChatBubble)

const styles = StyleSheet.create({
    linearGradient: {
        marginTop: hp(2),
        paddingHorizontal: wp(3),
        height: hp(9),
        borderRadius: hp(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    image: {
        width: wp(12),
        height: hp(6),
        borderRadius: wp(12)
    },
    title: {
        marginRight: 'auto',
        marginLeft: wp(5),
        fontSize: hp(2.5),
        color: COLOR.white,
        fontWeight: '500'
    }
})