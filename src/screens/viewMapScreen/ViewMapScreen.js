import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Label, Map, MapForwardBtn, Pressable } from '../../components'
import { SVG } from '../../assets/svg'
import { SCREEN } from '../../data/enums'



const ViewMapScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrow />
        </Pressable>}
        title={"Manchester Airport"}
        rightComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.CloseIcon />
        </Pressable>}
        titleStyle={styles.title}
      />

      <View style={styles.mapContianer}>
        <Map />

        <Pressable style={styles.suggestionBtn}>
          <Label style={styles.suggestionText}>See suggestions</Label>
        </Pressable>

        <MapForwardBtn onPress={()=>navigation.navigate(SCREEN.MAPROUTE)}/>

      </View>






    </View>
  )
}

export default ViewMapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.purple,
  },
  title: {
    color: COLOR.white,
    ...TEXT_STYLE.bigText,
    fontSize: hp(2),
    marginRight: 'auto',
    marginLeft: wp(4)
  },
  header: {
    paddingHorizontal: wp(10),
  },
  mapContianer: {
    flex: 1,
    position: 'relative'
  },
  suggestionBtn: {
    width: wp(32),
    height: hp(4),
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.blue,
    position: "absolute",
    top: hp(5),
    left: wp(35)
  },
  suggestionText: {
    ...TEXT_STYLE.smallText
  },
  
})