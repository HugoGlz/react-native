import React from 'react';

import { 
	Text,
	View
} from 'react-native';


function leftPad(number) {
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}

function formattedTime(secs) {
  const minutes = parseInt(secs / 60, 10);
  const seconds = parseInt(secs % 60, 10);
  return `${minutes} : ${leftPad(seconds.toString())}`
}


const LeftTime = ( props ) => {

	return (
		
		<View>
			<Text>
				{`${formattedTime(props.currentTime)}/${formattedTime(props.seekableDuration)}`}
			</Text>
		</View>
		
	)
}


export default LeftTime;
