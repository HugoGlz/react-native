import React from 'react';

import {
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

const CloseButton = ( props ) => {
	
	return (
		
		<TouchableOpacity
			onPress={props.onPress}
			style={styles.container}
		>
			<Text style={styles.button}>
				X
			</Text>
		</TouchableOpacity>
		
		
	)
	
}

const styles = StyleSheet.create({
	button: {
		fontWeight:'bold',
		color: 'white',
	},
	container: {
		backgroundColor: 'red',
		borderRadius: 12,
		width: 25,
		height: 25,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default CloseButton;