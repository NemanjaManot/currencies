import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* Actions */
import { getSingleSymbolAction } from '../Market/marketActions';
/* Components */
import SymbolItem from '../../components/SymbolItem/SymbolItem';
/* Styles */
import { styles } from './favoritesStyle';

const { container, favoritesListWrapper } = styles;

class Favorites extends PureComponent {
    static propTypes = {
        watchList: PropTypes.array,
        getSingleSymbol: PropTypes.func,
        userId: PropTypes.string
    };

    keyExtractor = (item, index) => index.toString();

    pressSymbolName = (symbolId, displayName) => {
        this.props.getSingleSymbol(this.props.userId, symbolId);
        this.props.navigation.navigate('SingleSymbol', { params: displayName });
    };

    pressFavoriteIcon = (symbolId) => {
        console.log(symbolId);
    };

    renderItem = ({ item }) => <SymbolItem
        name={ item.displayName }
        value={ item.price.ask }
        isFavorite
        onLabelPress={ this.pressSymbolName.bind(this, item.id, item.displayName) }
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
        watchList: store.marketReducer.watchList,
        userId: store.userReducer.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleSymbol: (userId, symbolId) => dispatch(getSingleSymbolAction(userId, symbolId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
