import React from 'react';

import { 
	View,
	Text,
	ImageBackground,
	StyleSheet
} from 'react-native'

const Category = (props) => {
		
	return (
		<ImageBackground 
			style={styles.wrapper}
			source={{ uri:props.background_image }}
		>
			<Text style={styles.genre}>{props.genres[0]}</Text>
		</ImageBackground>
		
	)
}

const styles = StyleSheet.create({
	wrapper: {
		height: 100,
		width: 250,
		borderRadius: 10,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center'
	},
	genre: {
		color: 'white',
		fontSize: 40,
		fontWeight: 'bold',
		textShadowRadius: 0,
		textShadowOffset: {
			width: 2,
			height: 2
		},
		textShadowColor: 'rgba(0,0,0, .75)'
	}
})

export default Category;