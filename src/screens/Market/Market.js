import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* Actions */
import { getUserDataAction } from '../../shared/user/userActions';
/* Styles */
import { styles } from './marketStyle';
import { globalStyles } from '../../assets/globalStyle';

const { TOUCHABLE_AREA } = globalStyles;
const { container } = styles;

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


                <Text>Market screen</Text>
                <TouchableOpacity
                    hitSlop={ TOUCHABLE_AREA }
                    onPress={ this.onBtnPress }
                >
                    <Text>Go to single symbol screen</Text>
                </TouchableOpacity>
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
