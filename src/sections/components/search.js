import React, { Component } from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

import API from '../../../utils/api';

import { connect } from 'react-redux';

class Search extends Component  {
	
	state = {
		text: ""
	}
	
	handleSubmit = async () => {
		let term = this.state.text;
		
		if ( !term ) return
		
		const movies = await API.searchMovie(term);
		
		this.props.dispatch({
			type: 'SET_SELECTED_MOVIE',
			payload: {
				movie: movies[0]
			}
		})
		
	}
	
	handleChangeText = ( text ) => {	
		this.setState({
			text
		})
	}
	
	render () {
		return (
		
			<TextInput
				style={styles.input}
				placeholder="Buscar tu pelicula"
				underlineColorAndroid="transparent"
				autoCorrect={false}
				autoCapitalize="none"
				onSubmitEditing={this.handleSubmit}
				onChangeText={this.handleChangeText}
				value={this.state.text}
			/>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		padding: 15,
		fontSize: 15,
		borderWidth: 1,
		borderColor: '#eaeaea'
	}
})

export default connect(null)(Search);