import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* Components */
import SymbolItem from '../../components/SymbolItem/SymbolItem';
/* Actions */
import { getUserDataAction } from '../../shared/user/userActions';
/* Selectors */
import { getFullSymbolsList } from './marketSelectors';
/* Styles */
import { styles } from './marketStyle';
import { globalStyles } from '../../assets/globalStyle';

const { TOUCHABLE_AREA } = globalStyles;
const { container, marketListWrapper } = styles;

class Market extends PureComponent {
    static propTypes = {
        getUserData: PropTypes.func,
        symbols: PropTypes.array
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

    renderItem = ({ item }) => <SymbolItem
        name={ item.displayName }
        value={ item.price.ask }
        isFavorited={ item.isFavorited }
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
                { /*
                <View style={ { marginTop: 30 } }>
                    <Text>Market screen</Text>
                    <TouchableOpacity
                        hitSlop={ TOUCHABLE_AREA }
                        onPress={ this.onBtnPress }
                    >
                        <Text>Go to single symbol screen</Text>
                    </TouchableOpacity>
                </View>*/ }
            </View>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        symbols: getFullSymbolsList(store)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: () => dispatch(getUserDataAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
