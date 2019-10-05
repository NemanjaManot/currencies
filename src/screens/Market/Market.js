import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

class Market extends PureComponent {
    static propTypes = {
        getUserData: PropTypes.func,
        symbols: PropTypes.array,
        getSingleSymbol: PropTypes.func,
        userId: PropTypes.string,
        toggleWatchlist: PropTypes.func,
        userAccount: PropTypes.object
    };

    state = {
        query: ''
    };

    componentDidMount() {
        this.props.getUserData();
    }

    keyExtractor = (item, index) => index.toString();

    pressSymbolName = (symbolId, displayName) => {
        this.props.getSingleSymbol(this.props.userId, symbolId);
        this.props.navigation.navigate('SingleSymbol', { params: displayName });
    };

    pressFavoriteIcon = (symbolId, isFavorite) => {
        const following = !isFavorite;
        this.props.toggleWatchlist(this.props.userAccount.id, symbolId, following);
    };

    renderItem = ({ item }) => <SymbolItem
        name={ item.displayName }
        value={ item.price.ask }
        isFavorite={ item.isFavorite }
        onLabelPress={ this.pressSymbolName.bind(this, item.id, item.displayName) }
        onIconPress={ this.pressFavoriteIcon.bind(this, item.id, item.isFavorite) }
    />;

    onSearchList = query => this.setState({ query });

    getFilteredList = () => this.props.symbols.filter(
        symbol => symbol.displayName.toLowerCase().includes(this.state.query.toLowerCase()));

    render() {
        return (
            <View style={ container }>
                <Searchbar
                    placeholder="Search here"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    onChangeText={ this.onSearchList }
                    value={ this.state.query }
                />

                <View style={ marketListWrapper }>
                    { this.props.symbols &&
                    <FlatList
                        data={ this.getFilteredList() }
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
        symbols: getFullSymbolsList(store),
        userId: store.userReducer.userId,
        userAccount: store.userReducer.userAccount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: () => dispatch(getUserDataAction()),
        getSingleSymbol: (userId, symbolId) => dispatch(getSingleSymbolAction(userId, symbolId)),
        toggleWatchlist: (accountId, symbolId, isFollowing) => dispatch(toggleWatchlistAction(accountId, symbolId, isFollowing))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
