import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
/* Components */
import SymbolItem from '../../components/SymbolItem/SymbolItem';
/* Actions */
import { getUserDataAction } from '../../shared/user/userActions';
import { getSingleSymbolAction, toggleWatchlistAction } from './marketActions';
/* Selectors */
import { getFullSymbolsList } from './marketSelectors';
/* Styles */
import { styles } from './marketStyle';

const { container, marketListWrapper } = styles;

const Market = ({ getUserData, getSingleSymbol, userId, navigation, toggleWatchlist, userAccount, symbols }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        getUserData();
    }, []);

    const pressSymbolName = (symbolId, displayName) => {
        getSingleSymbol(userId, symbolId);
        navigation.navigate('SingleSymbol', { params: displayName });
    };

    const pressFavoriteIcon = (symbolId, isFavorite) => {
        const following = !isFavorite;
        toggleWatchlist(userAccount.id, symbolId, following);
    };

    const renderItem = ({ item }) => {
        const { displayName, price, isFavorite, id } = item;
        const { ask } = price;
        return (
            <SymbolItem
                name={ displayName }
                value={ ask }
                isFavorite={ isFavorite }
                onLabelPress={ pressSymbolName.bind(this, id, displayName) }
                onIconPress={ pressFavoriteIcon.bind(this, id, isFavorite) }
            />
        );
    };

    const onSearchList = query => setQuery(query);

    const getFilteredList = () => symbols.filter(
        symbol => symbol.displayName.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <View style={ container }>
            <Searchbar
                placeholder="Search here"
                autoCapitalize="none"
                autoCorrect={ false }
                onChangeText={ onSearchList }
                value={ query }
            />

            <View style={ marketListWrapper }>
                { symbols && <FlatList
                    data={ getFilteredList() }
                    renderItem={ renderItem }
                    keyExtractor={ item => item.id }
                /> }
            </View>
        </View>
    );
};

const mapStateToProps = (store) => {
    return {
        symbols: getFullSymbolsList(store),
        userId: store.userReducer.userId,
        userAccount: store.userReducer.userAccount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: () => dispatch(getUserDataAction()),
        getSingleSymbol: (userId, symbolId) => dispatch(getSingleSymbolAction(userId, symbolId)),
        toggleWatchlist: (accountId, symbolId, isFollowing) =>
            dispatch(toggleWatchlistAction(accountId, symbolId, isFollowing))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
