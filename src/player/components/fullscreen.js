import React from 'react';
import {
	TouchableHighlight,
	View,
	Text,
	StyleSheet
} from 'react-native';

const FullScreen = props => {
	
	return (
		
		<TouchableHighlight
			onPress={props.onPress}
			overlayColor="red"
			style={styles.container}
			hitSlop={styles.hitSlop}
		>
			<Text>Full</Text>
		</TouchableHighlight>
		
	)
	
}

const styles = StyleSheet.create({
    button:  {
           color: 'white',
           fontSize: 10,
           fontWeight: 'bold'
       },
       container:  {
           justifyContent: 'center',
           paddingHorizontal: 10,
           height: 25,
           marginRight: 10,
           marginVertical: 5,
           borderWidth: 1,
           borderRadius: 10,
           borderColor: 'white',
           backgroundColor: 'gray'
       },
	   hitSlop: {
		   top:5,
		   bottom:5,
		   right:5,
		   left:5
	   }
})

export default FullScreen;
