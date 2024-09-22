import { Alert } from "react-native";


export const deleteConfirmation = ({ title, onPress }) => {
    confirmation({
        title: 'Delete',
        description: title ?
            `Are you sure to delete '${title}' ?` :
            `Are you sure to delete?`
        ,
        onOk: onPress
    })
}
export const confirmation = ({ title, description, cancelText = 'Cancel', okText = 'OK', onOk, onCancel }) => {
    Alert.alert(title, description, [
        {
            text: cancelText,
            onPress: onCancel,
            style: 'cancel',
        },
        {
            text: okText,
            onPress: onOk
        },
    ])
}
export default confirmation;