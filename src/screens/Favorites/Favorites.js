import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
/* Components */
import SymbolItem from '../../components/SymbolItem/SymbolItem';
/* Styles */
import { styles } from './favoritesStyle';

const { container, favoritesListWrapper } = styles;

class Favorites extends PureComponent {

    keyExtractor = (item, index) => index.toString();

    pressSymbolName = (symbolId) => {
        console.log(symbolId);
    };

    pressFavoriteIcon = (symbolId) => {
        console.log(symbolId);
    };

    renderItem = ({ item }) => <SymbolItem
        name={ item.displayName }
        value={ item.price.ask }
        isFavorite
        onLabelPress={ this.pressSymbolName.bind(this, item.id) }
        onIconPress={ this.pressFavoriteIcon.bind(this, item.id) }
    />;

    render() {
        return (
            <View style={ container }>
                <View style={ favoritesListWrapper }>
                    { this.props.watchList &&
                    <FlatList
                        data={ this.props.watchList }
                        renderItem={ this.renderItem }
                        keyExtractor={ this.keyExtractor }
                    />
                    }
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
