import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, ChatBubble, Pressable } from '../../components'
import { SVG } from '../../assets/svg'

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
        title={"Inbox"}
        titleStyle={styles.title}
      />

      <ChatBubble
       
         />
    </View>
  )
}

export default InboxScreen

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: COLOR.purple,
    padding: wp(4)
  },
  title: {
    color: COLOR.white,
    ...TEXT_STYLE.title,
  },
})