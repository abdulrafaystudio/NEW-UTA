import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Checkbox, Label, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { SCREEN } from '../../data/enums'

const PassengerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
      />

      <Label style={styles.heading}>These are the best places to stop in those cities. OK for you?</Label>

      <MapForwardBtn onPress={() => navigation.navigate(SCREEN.PASSENGER)} />

      <Label style={styles.heading}>Passenger options</Label>

      <Pressable style={styles.passengerBlock}>
        <SVG.PassengerIcon />
        <View style={styles.textContainer}>
          <Label style={styles.upperText}>Passenger options</Label>
          <Label style={styles.lowerText}>Think comfort, keep the middle seat empty</Label>
        </View>
        <Checkbox />
      </Pressable>

      <Pressable style={styles.passengerBlock}>
        <SVG.PassengerIcon />
        <View style={styles.textContainer}>
          <Label style={styles.upperText}>Women only</Label>
          <Label style={styles.lowerText}>Make your ride only visible to women</Label>
        </View>
        <Checkbox />
      </Pressable>

      <MapForwardBtn onPress={() => navigation.navigate(SCREEN.CALENDER)} />

    </View>
  )
}

export default PassengerScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    flex: 1,
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
  }
})
