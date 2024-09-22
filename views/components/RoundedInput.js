import { View, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";


export default function RoundedInput(props) {


  const [showPassword, setShowPassword] = React.useState(props.secureTextEntry || false)
  const [focus, setFocus] = React.useState(false)

  return (
    <View style={[styles.container, { borderColor: focus ? '#0094FF50' : "#C6CEDD", backgroundColor: "#fff", }, props.containerStyle]}>
      {props.icon ? <View style={[{ marginRight: 5 }, props.iconStyle]}>{props.icon}</View> : null}

      <TextInput
        {...props}
        keyboardShouldPersistTaps='always'
        onFocus={() => { setFocus(true) }}
        onBlur={() => { setFocus(false) }}
        secureTextEntry={showPassword}
        placeholderTextColor="#A5B0C3"
        style={[styles.input,props.inputTextStyle, { color: "#000" }]}
      />

      {props.rightIcon ? <View style={[{ marginRight: 5 }, props.iconStyle]}>{props.rightIcon}</View> : null}

      {props.secureTextEntry ?
        <TouchableOpacity style={{ padding: 5 }} onPress={() => { setShowPassword(!showPassword) }}>
          {showPassword ?
            <Ionicons name="eye-off-outline" color="grey" size={18} />
            :
            <Ionicons name="eye-outline" color="grey" size={18} />
          }
        </TouchableOpacity>
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: .5,
    paddingHorizontal: 21,
    height: Platform.select({
      ios: 50
    })
    // backgroundColor: 'red',

    // shadowColor: "#EAF2FF",
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.00,

    // elevation: 24,
  },
  input: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    flex: 1,
  }
})