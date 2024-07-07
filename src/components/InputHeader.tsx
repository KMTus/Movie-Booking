import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon';

const InputHeader = (props:any)=> {
const [searchtext , SetSearchtext ] = useState<string>('');

  return (
    <View style={styles.inputbox}>
      <TextInput style = {styles.textInput} 
      onChangeText={textInput =>SetSearchtext(textInput) } 
      placeholderTextColor={COLORS.WhiteRGBA32}
      placeholder='Search movie '
        value={searchtext}
        />
      <TouchableOpacity  style= {styles.searchicon} 
            onPress={()=> props.searchFunction(searchtext)}>
        <CustomIcon name='search' 
        color={COLORS.Orange} 
        size={FONTSIZE.size_20} />
      </TouchableOpacity>
      
    </View>
  )
}

export default InputHeader

const styles = StyleSheet.create({
    inputbox : {
       display : 'flex',
       paddingVertical : SPACING.space_8 ,
       paddingHorizontal : SPACING.space_24,
       borderWidth: 2,
       borderColor : COLORS.WhiteRGBA15 ,
       borderRadius : BORDERRADIUS.radius_25 ,
       flexDirection : 'row',
    },
    textInput : {
        width : '90%',
        fontFamily : FONTFAMILY.poppins_regular,
        fontSize :  FONTSIZE.size_14,
        color : COLORS.White
    },
    searchicon : {
        alignItems : 'center',
        justifyContent : 'center',
        padding : SPACING.space_10,
    }
})