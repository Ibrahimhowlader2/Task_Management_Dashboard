import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default AppLoadingScreen = (props) => {


	return (
		<>
			<View style={styles.container}>
				<View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', marginTop: 60 }}>
					{/* <Image style={{ width: 100, height: 100 }} source={logo} resizeMode='contain' /> */}
					<Text style={{ color: '#01157B', fontSize: 18, fontWeight:'bold', }}>Task Management Dashboard</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text style={styles.text}>Please wait</Text>
					<Text style={[styles.subText, { color: "#C6CEDD" }]}>We are fetching your data</Text>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#ffffff'
	},
	text: {
		fontFamily: 'Rubik-Regular',
		color: '#222',
		fontSize: 12
	},
	subText: {
		marginBottom: Platform.OS == 'ios' ? 60 : 40,
		fontFamily: 'Rubik-Regular',
		fontSize: 10,
		letterSpacing: 3,
		marginTop: 5
	}
})
