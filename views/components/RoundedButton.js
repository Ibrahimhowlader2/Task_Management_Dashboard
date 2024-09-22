import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { typography } from '../../constants/Typography'

export default function RoundedButton({ onPress, title, containerStyle, btnTextStyle, leftIcon, rightIcon, disabled, loading }) {

  return (
    <TouchableOpacity onPress={onPress} style={[
      styles.container, containerStyle, (disabled || loading) && { opacity: 0.5 },
    ]} disabled={disabled || loading}>

      {
        leftIcon ? <View style={styles.leftIcon}>{leftIcon}</View>
          :
          null
      }
      <Text style={[styles.text, btnTextStyle]}>{loading ? <ActivityIndicator color='#ffffff' /> : title}</Text>
      {
        rightIcon ? <View style={styles.rightIcon}>{rightIcon}</View>
          :
          null
      }
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0047FF',
    borderRadius: 100,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 6,
    borderColor: "#0047ffab",
    marginVertical:10
  },
  text: {
    color: '#FAFAFA',
    fontWeight:'700',
    fontSize: 16
  },
  rightIcon: {
    marginLeft: 5,
  },
  leftIcon: {
    marginRight: 5,
  }
})