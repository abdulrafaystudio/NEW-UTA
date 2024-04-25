import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Label, Map, Pressable, SearchInput } from '../../components'
import { SVG } from '../../assets/svg'
import { KEYBOARD_TYPE, SCREEN } from '../../data/enums'

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppHeader
          style={styles.header}
          leftComp={<Pressable onPress={() => navigation.goBack()}>  
            <SVG.BackArrowActive/>
          </Pressable>}
        />

        <Label style={styles.heading}>Where would you like to drop off passengers?</Label>

        <SearchInput
          placeholder={"Enter the full address"}
          keyboard={KEYBOARD_TYPE.EMAIL}
          iconName={SVG.SearchWhite}
          style={styles.searchContainer}
          value={""}
          onChange={""}
        />
      </View>

      <Pressable style={{flex:1}} onPress={()=>navigation.navigate(SCREEN.MAPVIEW)}>
        <Map />
      </Pressable>

      
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.purple,
    flex: 1,
    
  },
  heading: {
    ...TEXT_STYLE.title,
    marginHorizontal: wp(4)
  },
  header:{
    padding:wp(4)
  },
  searchContainer:{
    marginHorizontal:wp(4)
  }
  
  
})
