import React from 'react';

import {
	View,
	Text
} from 'react-native';

const Layout = ( props ) => {
	
	return (
		
		<View>
			{props.children}
		</View>
		
	)
	
}

export default Layout;