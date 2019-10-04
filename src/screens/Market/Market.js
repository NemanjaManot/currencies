import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* Components */
import SymbolItem from '../../components/SymbolItem/SymbolItem';
/* Actions */
import { getUserDataAction } from '../../shared/user/userActions';
import { getSingleSymbolAction } from './marketActions';
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
        userId: PropTypes.string
    };

    state = {
        query: ''
    };

    componentDidMount() {
        this.props.getUserData();
    }

    onBtnPress = () => {
        this.props.navigation.navigate('SingleSymbol')
    };

    keyExtractor = (item, index) => index.toString();

    pressSymbolName = (symbolId) => {
        this.props.getSingleSymbol(this.props.userId, symbolId);
        this.props.navigation.navigate('SingleSymbol');
    };

    pressFavoriteIcon = (symbolId) => {
        console.log(symbolId);
    };

    renderItem = ({ item }) => <SymbolItem
        name={ item.displayName }
        value={ item.price.ask }
        isFavorite={ item.isFavorite }
        onLabelPress={ this.pressSymbolName.bind(this, item.id) }
        onIconPress={ this.pressFavoriteIcon.bind(this, item.id) }
    />;

    render() {
        return (
            <View style={ container }>
                <Searchbar
                    placeholder="Search here"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    //onChangeText={ this.onSearchChange }
                    value={ this.state.query }
                />

                <View style={ marketListWrapper }>
                    { this.props.symbols &&
                    <FlatList
                        data={ this.props.symbols }
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
        userId: store.userReducer.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: () => dispatch(getUserDataAction()),
        getSingleSymbol: (userId, symbolId) => dispatch(getSingleSymbolAction(userId, symbolId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
