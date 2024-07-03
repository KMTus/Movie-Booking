import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme'




const HomeSceen = ({navigation}:any) => {
  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.push('MovieDetails')
      }}>
        <Text style={{color: COLORS.Black, fontSize: 20 }}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeSceen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    // backgroundColor: COLORS.Black,
    alignItems: 'center',
    justifyContent: 'center'
  }
})