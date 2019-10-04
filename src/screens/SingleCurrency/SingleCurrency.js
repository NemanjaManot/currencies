import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
/* Styles */
import { styles } from './singleCurrencyStyle';

const { container } = styles;

class SingleCurrency extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('params')
    });

    render() {
        // console.log(this.props.chartData);
        // console.log(this.props.singleSymbol);
        return (
            <View style={ container }>
                <Text>Single Currency screen</Text>
            </View>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        singleSymbol: store.marketReducer.singleSymbol,
        chartData: store.marketReducer.chartData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getUserData: () => dispatch(getUserDataAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCurrency);
