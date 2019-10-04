import React, { PureComponent } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
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

    renderSymbolItem = (symbols) => {
        return symbols.map(symbol => {
            return (
                <SymbolItem
                    name={ symbol.displayName }
                    value={ symbol.price.ask }
                    isFavorited={ symbol.isFavorited }
                />
            )
        });
    };

    render() {
        return (
            <ScrollView style={ container }>
                <Searchbar
                    placeholder="Search here"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    //onChangeText={ this.onSearchChange }
                    value={ this.state.query }
                />

                <View style={ marketListWrapper }>
                    { this.props.symbols && this.renderSymbolItem(this.props.symbols) }
                </View>

                <View style={ { marginTop: 30 } }>
                    <Text>Market screen</Text>
                    <TouchableOpacity
                        hitSlop={ TOUCHABLE_AREA }
                        onPress={ this.onBtnPress }
                    >
                        <Text>Go to single symbol screen</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
