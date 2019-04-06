import React from 'react';

import {
	View,
	Slider
} from 'react-native';


const ProgressBar = ( props ) => {
	
	return (
		
		<Slider 
			style={{
				width:'50%'
			}}
			maximumValue={props.maximumValue}
			minimumValue={0}
			value={props.currentTime}
			onSlidingComplete={props.onChange}
			step={1}
		/>
		
	)
	
}


export default ProgressBar;