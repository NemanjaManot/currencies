import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* Components */
import SymbolItem from '../../components/SymbolItem.js/SymbolItem';
/* Actions */
import { getUserDataAction } from '../../shared/user/userActions';
/* Styles */
import { styles } from './marketStyle';
import { globalStyles } from '../../assets/globalStyle';
/* Themes and colors */
import { otherColors, theme } from '../../assets/theme';

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

    renderSymbolItem = () => {
        return (
            <SymbolItem
                name='Bitcoin'
                value='3,745.00'
                iconColor={ otherColors.secundaryColor }
            />
        )
    };

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
                    { this.renderSymbolItem() }
                </View>

                <View style={ { marginTop: 100 } }>
                    <Text>Market screen</Text>
                    <TouchableOpacity
                        hitSlop={ TOUCHABLE_AREA }
                        onPress={ this.onBtnPress }
                    >
                        <Text>Go to single symbol screen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        symbols: store.marketReducer.symbols
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: () => dispatch(getUserDataAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
