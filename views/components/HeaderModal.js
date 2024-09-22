import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import CommonStyles from '../../constants/CommonStyles';



const HeaderModal = (props) => {

    return (
        <>
            <View style={[CommonStyles.rowCenter, {/* backgroundColor:'green', */height: 48 }, props.containerStyle]}>
                <Text
                    style={[CommonStyles.modalHeader, props.titleStyle, { color: "#10275A", }]}
                >{props.title}</Text>
                <TouchableOpacity style={[CommonStyles.modalCloseButton, { /* backgroundColor:'red', */width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => props.onPress()}
                >
                    <Entypo name="cross" color="#CCCCCC" size={18 * 1.4} />

                </TouchableOpacity>
            </View>
            <View style={[styles.dividerHorizontal, props.diverStyle]} />
        </>
    )
}

export default HeaderModal

const styles = StyleSheet.create({
    dividerHorizontal: {
        height: 1,
        backgroundColor: '#E8EDF3',
        marginBottom: 20,
        marginTop: 10
    },
})