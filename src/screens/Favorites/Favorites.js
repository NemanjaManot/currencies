import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* Actions */
import { getSingleSymbolAction, toggleWatchlistAction } from '../Market/marketActions';
/* Components */
import SymbolItem from '../../components/SymbolItem/SymbolItem';
/* Styles */
import { styles } from './favoritesStyle';

const { container, favoritesListWrapper } = styles;

class Favorites extends PureComponent {
    static propTypes = {
        watchList: PropTypes.array,
        getSingleSymbol: PropTypes.func,
        userId: PropTypes.string,
        toggleWatchlist: PropTypes.func,
        userAccount: PropTypes.object
    };

    pressSymbolName = (symbolId, displayName) => {
        this.props.getSingleSymbol(this.props.userId, symbolId);
        this.props.navigation.navigate('SingleSymbol', { params: displayName });
    };

    pressFavoriteIcon = (symbolId) => {
        this.props.toggleWatchlist(this.props.userAccount.id, symbolId, false);
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
                        keyExtractor={ item => item.id }
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
        userId: store.userReducer.userId,
        userAccount: store.userReducer.userAccount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleSymbol: (userId, symbolId) => dispatch(getSingleSymbolAction(userId, symbolId)),
        toggleWatchlist: (accountId, symbolId, isFollowing) => dispatch(toggleWatchlistAction(accountId, symbolId, isFollowing))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
