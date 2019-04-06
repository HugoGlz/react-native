import React, {Component} from 'react';

import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator
} from 'react-native'

import Video from 'react-native-video';

import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import FullScreen from '../components/fullscreen'
import LeftTime from '../components/left-time'
import ProgressBar from '../components/progress-bar'

class Player extends Component {
	
	state = {
		loading: true,
		paused: false,
		isFullScreen:false,
		currentTime: 0,
		seekableDuration: 0
	}
	
	player = {}
	
	onBuffer = ( { isBuffering }) => {
		this.setState({
			loading: isBuffering
		})
	}
	
	onLoad = () => {
		this.setState({
			loading: false
		})
	}
	
	playPause = () => {
		this.setState({
			paused: !this.state.paused
		})
	}
	
	fullScreen = () => {
		this.setState({
			isFullScreen: true
		})
	}
	
	onFullscreenPlayerDidDismiss = () => {
		this.setState({
			isFullScreen: false
		})
	}
	
	onProgress = (({currentTime,seekableDuration}) => {
		this.setState({
			currentTime,
			seekableDuration
		})
	})
	
	updateCurrentTime = ( currentValue ) => {
		this.player.seek(currentValue)
	}
	
	onRef = (ref) => {
		this.player = ref
		this.player.presentFullscreenPlayer();
	}
	
	render() {
		return (
			<Layout
				loading={this.state.loading}
				
				video={
					<Video 
						source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
						style={styles.video}
						resizeMode="contain"
						onBuffer={this.onBuffer}
						onLoad={this.onLoad}
						paused={this.state.paused}
						fullscreen={this.state.isFullScreen}
						onFullscreenPlayerDidDismiss={this.onFullscreenPlayerDidDismiss}
						onProgress={this.onProgress}
						ref= {this.onRef}
					/>
				}
				
				loader={
					<ActivityIndicator color="blue"/>
				}
				
				controls={
					<ControlLayout>
						<PlayPause 
							onPress={this.playPause}
							paused={this.state.paused}
						/>
							
						<ProgressBar 
							onChange={this.updateCurrentTime}
							currentTime={this.state.currentTime}
							maximumValue={this.state.seekableDuration}
						/>
						
						<LeftTime 
							currentTime={this.state.currentTime}
							seekableDuration={this.state.seekableDuration}
						/>
							
						<FullScreen 
							onPress={this.fullScreen}
							/>
					</ControlLayout>
				}
			/>
		)
	}
	
}

const styles = StyleSheet.create({
	video: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		top: 0,
	}
})


export default Player;