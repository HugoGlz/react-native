import React , {Component} from 'react';

import {
	View,
	Text
} from 'react-native'

import Player from '../../player/containers/player'
import Layout from '../components/layout';
import Header from '../../sections/components/header'
import CloseButton from '../../sections/components/close-button';
import Details from '../../videos/components/details'

import { connect } from 'react-redux';

class Movie extends Component {
	
	closeVideo = () => {
		this.props.dispatch({
			type: 'SET_SELECTED_MOVIE',
			payload: {
				movie: null
			}
		})
	}
	
	render () {
		return (
			<Layout>
				<Header>
					<CloseButton 
						onPress={this.closeVideo}
					/>
				</Header>
				<Player />
				<Details {...this.props.movie} />
			</Layout>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		movie: state.selectedMovie
	}
}

export default connect(mapStateToProps)(Movie);