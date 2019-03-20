import React, {Component} from 'react';
import { Text, View } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list'
import API from './utils/api';

import Player from './src/player/containers/player';

export default class App extends Component<Props> {
	
	state = {
		suggestionList : [],
		categoryList: []
	}
	
	async componentDidMount() {
		const movies = await API.getSuggestions(10);
		const categories = await API.getMovies();
		
		console.log('movies', movies)
		console.log('catergories', categories)
		
		this.setState({
			...this.state,
			suggestionList: movies,
			categoryList: categories
		})
	}
	
  render() {
    return (
      <Home>
		<Header>
			<Text>hola que hace2</Text>
		</Header>
	
		<Text>buscador</Text>
		
		<Player />
				
		<CategoryList 
			list={this.state.categoryList}
		/>
			
		<SuggestionList 
			list={this.state.suggestionList}
		/>
	  </Home>
    );
  }
}