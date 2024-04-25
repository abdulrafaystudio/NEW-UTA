import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { Label, Pressable, SearchInput } from '../../components'
import { SVG } from '../../assets/svg'
import { KEYBOARD_TYPE } from '../../data/enums'
import { countryNameData } from '../../data/dummyData'

const PublishScreen = ({ navigation }) => {
  const [countryName, setCountryName] = useState("")
  const [filteredData, setFilteredData] = useState(countryNameData)
  const [showCurrentLocation, setShowCurrentLocation] = useState(true)

  const handleSearch = (text) => {
    const filtered = countryNameData.filter(item => item.text.toLowerCase().includes(text.toLowerCase()))
    setFilteredData(filtered)
    setCountryName(text)
    // Hide current location button when searching
    setShowCurrentLocation(text === "")
  }

  return (
    <View style={styles.container}>
      <Label style={styles.heading}>{'Where are you leaving from?'}</Label>

      <SearchInput
        placeholder={"Enter the full address"}
        keyboard={KEYBOARD_TYPE.EMAIL}
        iconName={SVG.SearchWhite}
        value={countryName}
        onChange={(text) => handleSearch(text)}
      />

      {showCurrentLocation && (
        <Pressable style={styles.currentLocationContainer}>
          <SVG.CurrentLocation width={20} height={20} />
          <Label style={styles.locationText}>{"Use current location"}</Label>
          <SVG.ForwardIcon width={20} height={20} />
        </Pressable>
      )}

      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <Pressable style={styles.locationContainer} onPress={()=>navigation.navigate(item.route)}>
            <SVG.Clock width={20} height={20} />
            <Label style={styles.locationText}>{item.text}</Label>
            <SVG.ForwardIcon width={20} height={20} />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default PublishScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    height: hp(91),
    padding: wp(10)
  },
  heading: {
    ...TEXT_STYLE.title,
  },

  currentLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(8),
    marginTop: hp(3),
    borderBottomWidth: 1,
    borderColor: COLOR.lightGrey,
  },
  locationText: {
    textAlign: 'left',
    width: '60%',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(5.5),
    marginTop: hp(3),
    borderBottomWidth: 1,
    borderColor: COLOR.lightGrey
  }
})
