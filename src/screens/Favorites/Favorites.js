import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
/* Actions */
import { getSingleSymbolAction, toggleWatchlistAction } from '../Market/marketActions';
/* Components */
import SymbolItem from '../../components/SymbolItem/SymbolItem';
/* Styles */
import { styles } from './favoritesStyle';

const { container, favoritesListWrapper } = styles;

const Favorites = ({ getSingleSymbol, userId, toggleWatchlist, userAccount, watchList }) => {
    const pressSymbolName = (symbolId, displayName, navigation) => {
        getSingleSymbol(userId, symbolId);
        navigation.navigate('SingleSymbol', { params: displayName });
    };

    const pressFavoriteIcon = (symbolId) => {
        toggleWatchlist(userAccount.id, symbolId, false);
    };

    const renderItem = ({ item }) => <SymbolItem
        name={ item.displayName }
        value={ item.price.ask }
        isFavorite
        onLabelPress={ pressSymbolName.bind(this, item.id, item.displayName) }
        onIconPress={ pressFavoriteIcon.bind(this, item.id) }
    />;

    return (
        <View style={ container }>
            <View style={ favoritesListWrapper }>
                { watchList &&
                <FlatList
                    data={ watchList }
                    renderItem={ renderItem }
                    keyExtractor={ item => item.id }
                />
                }
            </View>
        </View>
    )
};

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
