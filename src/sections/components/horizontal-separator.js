import React from 'react';

import { 
	View, 
	Text,
	StyleSheet
} from 'react-native';

const VerticalSeparator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
	  flex: 1,
	  marginHorizontal: 5
  }
})

export default VerticalSeparator;