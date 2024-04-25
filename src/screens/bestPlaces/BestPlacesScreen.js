import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Label, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { SCREEN } from '../../data/enums'

const BestPlacesScreen = ({ navigation }) => {
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
    </View>
  )
}

export default BestPlacesScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    height: hp(100),
    padding:wp(4)
  },
  heading: {
    ...TEXT_STYLE.title,
    marginHorizontal: wp(4)
  },
})