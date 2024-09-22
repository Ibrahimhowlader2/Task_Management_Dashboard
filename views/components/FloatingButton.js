import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, { useState, useRef } from 'react';
const width = Dimensions.get('window').width / 2 - 30;
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = props => {

  const animation = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if (open) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
    setOpen(!open);
  };

  const secondBtnInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -65],
  });

  const textInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -28],
  });

  const oneBtnInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -80, -130],
  });

  const secondBtnStyle = {
    transform: [
      {
        translateY: secondBtnInterpolate,
      },
    ],
  };

  const textStyle = {
    transform: [
      {
        translateY: textInterpolate,
      },
    ],
  };

  const oneBtnStyle = {
    transform: [
      {
        translateY: oneBtnInterpolate,
      },
    ],
  };
  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.background]}>
          {props.onPressAutoTaskCreate && (
            <TouchableWithoutFeedback
              onPress={() => {
                // Alert.alert('printIcon');
                props.onPressAutoTaskCreate();
                toggleOpen();
              }}>
              <Animated.View
                style={[
                  styles.button,
                  oneBtnStyle,
                  { backgroundColor: '#0047FF' },
                ]}>
                <Icon
                  name="checkbox-marked-circle-plus-outline"
                  size={28}
                  color="#fff"
                />
                <Animated.View
                  style={[
                    {
                      opacity: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      }),
                    },
                    textStyle,
                  ]}>
                  <Text style={[styles.btnText, { width: 135, backgroundColor: '#0047FF' }]}>
                    Create Auto Task
                  </Text>
                </Animated.View>
              </Animated.View>
            </TouchableWithoutFeedback>
          )}

          {props.onPressTaskCreate && (
            <TouchableWithoutFeedback
              onPress={() => {
                // Alert.alert('printIcon');
                props.onPressTaskCreate();
                toggleOpen();
              }}>
              <Animated.View
                style={[
                  styles.button,
                  secondBtnStyle,
                  { backgroundColor: '#195ADC' },
                ]}>
                <Icon name="clipboard-plus-outline" size={28} color="#fff" />
                <Animated.View
                  style={[
                    {
                      opacity: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      }),

                    },
                    textStyle,
                  ]}>
                  <Text style={styles.btnText}>Create Task</Text>
                </Animated.View>
              </Animated.View>
            </TouchableWithoutFeedback>
          )}

          <TouchableWithoutFeedback
            onPress={() => {
              toggleOpen();
            }}>
            <Animated.View style={[styles.button]}>
              <AntDesign name="plus" size={24} color="white" />
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    </>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 80,
    right: 80,
    zIndex: 1,
  },

  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#195ADC',
  },
  btnText: {
    color: 'white',
    position: 'absolute',
    right: 35,
    width: 100,
    fontWeight: '600',
    textAlign: 'center',
    backgroundColor: "#195ADC",
    padding: 5,
    borderRadius: 5

  },
});
