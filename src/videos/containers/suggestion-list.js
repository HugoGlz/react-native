import React, { Component } from 'react';
import { 
	FlatList,
	Text
} from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Suggestion from '../components/suggestion';
import Separator from '../../sections/components/vertical-separator';
import { connect } from 'react-redux';

class SuggestionList extends Component {
	
	renderEmpty = () => <Empty text="No hay elementos en la lista :(" /> 
		
	renderItem = ( { item } ) => 
				<Suggestion 
					OnPress={ () => {
						 this.viewMovie(item) 
					} } 
					{ ...item } 
				/>
	
	keyExtractor = (item) => item.id.toString()
	
	viewMovie = (item) => {
		this.props.dispatch({
			type: 'SET_SELECTED_MOVIE',
			payload: {
				movie: item
			}
		})
	}
	
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

const mapStateToProps = ( state ) => {
	return {
		list: state.suggestionList
	}
}

export default connect(mapStateToProps)(SuggestionList);
