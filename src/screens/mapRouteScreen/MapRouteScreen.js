import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Label, Map, MapForwardBtn } from '../../components'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { SVG } from '../../assets/svg'
import { routeRareData } from '../../data/dummyData'
import { SCREEN } from '../../data/enums'

const MapRouteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.85 }}>
        <Map />
      </View>

      <View style={styles.routeContainer}>
        <Label style={styles.routeHeading}>What is your route?</Label>

        {routeRareData.map((item, index) => (
          <View style={styles.detailContainer} key={index}>
            <View>
              <Label style={styles.whiteText}>{item.time}</Label>
              <Label style={styles.lightColorText}>{item.km}</Label>
            </View>

            <View>
              <SVG.BackArrow />
            </View>
          </View>
        ))}

        <MapForwardBtn onPress={() => navigation.navigate(SCREEN.STOP_OVER)} />
      </View>
    </View>
  )
}

export default MapRouteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  routeContainer: {
    flex: 1,
    backgroundColor: COLOR.purple,
    paddingTop: hp(5),
    paddingHorizontal: wp(10)
  },
  routeHeading: {
    ...TEXT_STYLE.textMedium,
    fontSize: hp(2.5),
    textAlign: 'center',
    marginBottom: hp(2)
  },
  whiteText: {
    color: COLOR.white, // Assuming white color
  },
  lightColorText: {
    color: COLOR.lightGrey
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp(2)
  }
})
