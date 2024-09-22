import React from 'react';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Text, StyleSheet } from 'react-native';
import { deleteConfirmation } from '../../services/confirmation.service';

export default DotMenu = ({ onPressEdit, onPressDelete, title }) => {

    return (
        <Menu >
            <MenuTrigger
                style={{
                    alignItems: 'center',
                    paddingVertical: 0,
                    paddingHorizontal: 14,
                }}>
                <Icon name="dots-horizontal" color="#5C6168" size={25} />
            </MenuTrigger>
            <MenuOptions style={{}}>
                {onPressEdit &&
                    <MenuOption
                        onSelect={onPressEdit}
                        style={[
                            styles.popupContent,
                            { backgroundColor: "#fff" },
                        ]}>
                        <Text style={{ color: '#818181' }}>Edit</Text>
                        <Feather name="edit" color="#818181" size={16} />
                    </MenuOption>}

                {onPressDelete && (
                    <MenuOption
                        onSelect={() =>
                            deleteConfirmation({
                                onPress: onPressDelete,
                                title: title
                            })
                        }
                        style={[
                            styles.popupContent,
                            { backgroundColor: "#fff" },
                        ]}
                    >
                        <Text style={{ color: 'red' }}>Delete</Text>
                        <Icon name="delete" color="red" size={18} />
                    </MenuOption>
                )}

            </MenuOptions>
        </Menu>
    )
}


const styles = StyleSheet.create({
    popupContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderBottomColor: '#ccc'
    },
})