import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, hp } from '../../data/StyleGuides'
import { MapForwardBtn } from '../../components'
import { SCREEN } from '../../data/enums'

const StopOverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>StopOverScreen</Text>

      <MapForwardBtn onPress={() => navigation.navigate(SCREEN.BEST_PLACES)} />
    </View>
  )
}

export default StopOverScreen

const styles = StyleSheet.create({
  container: {
    height: hp(99),
        backgroundColor: COLOR.purple
  }
})