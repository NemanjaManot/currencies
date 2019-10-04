import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
/* Components */
import SymbolItem from '../../components/SymbolItem/SymbolItem';
/* Styles */
import { styles } from './favoritesStyle';

const { container, favoritesListWrapper } = styles;

class Favorites extends PureComponent {

    renderSymbolItem = (watchList) => {
        return watchList.map(symbol => {
            return (
                <SymbolItem
                    name={ symbol.displayName }
                    value={ symbol.price.ask }
                    isFavorited
                />
            )
        });
    };

    render() {
        return (
            <View style={ container }>
                <View style={ favoritesListWrapper }>
                    { this.props.watchList && this.renderSymbolItem(this.props.watchList) }
                </View>
            </View>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        watchList: store.marketReducer.watchList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //func: () => dispatch(func())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
