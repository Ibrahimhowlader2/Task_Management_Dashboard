import React, { useContext } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';


export default function Input(props) {
	const [focus, setFocus] = React.useState(false)


	return (
		<>
			<View style={[
				styles.input,
				focus ? { borderColor: '#0094FF' } : { borderColor: '#E3E8F1' },
				props.style
			]}>
				{props.icon ? <View style={styles.icon}>{props.icon}</View> : null}
				<TextInput
					{...props}
					style={[styles.text, props.textStyle, { color: "#000" }]}
					placeholderTextColor={'#C6CEDD'}
					// // placeholder={props.placeholder}
					// underlineColorAndroid='transparent'
					onFocus={() => { setFocus(true) }}
					onBlur={() => { setFocus(false) }}
					textAlignVertical="top"
				/>
			</View>

		</>
	);
}

const styles = StyleSheet.create({
	input: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		borderColor: '#B6B6B6',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 5,
		paddingHorizontal: 10,
		marginVertical: 8,
	},
	text: {
		width: '100%',
		color: '#000000',
		fontFamily: 'SourceSansPro-Regular',
	},
	icon: {
		marginHorizontal: 6,
		marginTop: -3
	}
});
