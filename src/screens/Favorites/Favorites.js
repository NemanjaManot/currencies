// @flow
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

type Props = {
    getSingleSymbol: Function,
    userId: number,
    toggleWatchlist: Function,
    userAccount: Object,
    watchList: Array<Object>
};

const Favorites = ({ getSingleSymbol, userId, toggleWatchlist, userAccount, watchList }: Props) => {
    const pressSymbolName = (symbolId) => {
        getSingleSymbol(userId, symbolId);
    };

    const pressFavoriteIcon = (symbolId) => {
        toggleWatchlist(userAccount.id, symbolId, false);
    };

    const renderItem = ({ item }) => {
        const { price, displayName } = item;
        const { ask } = price;

        return (
            <SymbolItem
                name={ displayName }
                value={ ask }
                isFavorite
                onLabelPress={ pressSymbolName.bind(this, item.id) }
                onIconPress={ pressFavoriteIcon.bind(this, item.id) }
            />
        );
    };

    return (
        <View style={ container }>
            <View style={ favoritesListWrapper }>
                { watchList && <FlatList
                    data={ watchList }
                    renderItem={ renderItem }
                    keyExtractor={ item => item.id }
                /> }
            </View>
        </View>
    );
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
        toggleWatchlist: (accountId, symbolId, isFollowing) =>
            dispatch(toggleWatchlistAction(accountId, symbolId, isFollowing))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
