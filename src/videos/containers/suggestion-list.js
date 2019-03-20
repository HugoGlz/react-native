import React, { Component } from 'react';
import { 
	FlatList,
	Text
} from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Suggestion from '../components/suggestion';
import Separator from '../../sections/components/vertical-separator';

class SuggestionList extends Component {
	
	renderEmpty = () => <Empty text="No hay elementos en la lista :(" /> 
		
	renderItem = ( { item } ) => <Suggestion { ...item } />
	
	keyExtractor = (item) => item.id.toString()
	
	
	render() {
		
		return (	
			<Layout
				title="Recomendado para ti"
			>
				<FlatList
					keyExtractor = { this.keyExtractor }
					data = { this.props.list }
					ListEmptyComponent = { this.renderEmpty }
					ItemSeparatorComponent = { Separator }
					renderItem = { this.renderItem }
				/>
			 </Layout>
		)
		
	}	
}

export default SuggestionList;
