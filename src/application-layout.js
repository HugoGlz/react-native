import React, { Component } from 'react';

import {
	View,
	Text
} from 'react-native';

import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list'
import API from '../utils/api';

import Player from './player/containers/player';

import Movie from './screens/containers/movie';

import { connect } from 'react-redux'

class AppLayout extends Component {
	
	async componentDidMount() {

		const suggestionList = await API.getSuggestions(10);
		
		console.log('suggestionList',suggestionList)
		
		this.props.dispatch({
			type: 'SET_SUGGESTION_LIST',
			payload: {
				suggestionList
			}
		})
		
		const categoryList = await API.getMovies();
		
				console.log('categoryList',categoryList)
		
		this.props.dispatch({
			type: 'SET_CATEGORY_LIST',
			payload: {
				categoryList
			}
		})
	}
	
	render () {		

		console.log('props',this.props)

		if ( this.props.selectedMovie !== undefined ) {
			return (<Movie />)
		}
		
			return (
				<Home>
					<Header>
						<Text>hola que hace2</Text>
					</Header>

					<Text>buscador</Text>

					<CategoryList />
					<SuggestionList />
				</Home>
			)
			
	}
}

const mapStateToProps = ( state ) => { return {selectedMovie: state.selectedMovie} }

export default connect(mapStateToProps)(AppLayout);