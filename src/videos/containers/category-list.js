import React, { Component } from 'react';

import {
	View,
	Text,
	FlatList
} from 'react-native'

import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Category from '../components/category';
import Separator from '../../sections/components/horizontal-separator';

class CategoryList extends Component {
	
	renderEmpty = () => <Empty text="No hay elementos en la lista :(" /> 
		
	renderItem = ( { item } ) => <Category { ...item } />
	
	keyExtractor = (item) => item.id.toString()
	
	itemSeparator = () => <Separator />
	
	render () {
		return (
			<Layout
				title="Categorias"
			>
				<FlatList
					horizontal
					keyExtractor = { this.keyExtractor }
					data = { this.props.list }
					ListEmptyComponent = { this.renderEmpty }
					ItemSeparatorComponent = { this.itemSeparator }
					renderItem = { this.renderItem }
				/>
			</Layout>
		)
	}
}

export default CategoryList;