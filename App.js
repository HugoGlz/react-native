import React, {Component} from 'react';


import Loading from './src/sections/components/loading'

import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/'
import { PersistGate } from 'redux-persist/integration/react';

import AppLayout from './src/application-layout'

export default class App extends Component<Props> {
	
  render() {
    return (
		<Provider
			store={store}
			>

			<PersistGate 
				loading={
					<Loading />
				} 
				persistor={persistor}
			>
		  		<AppLayout />
			</PersistGate>
		</Provider>
    );
  }
}