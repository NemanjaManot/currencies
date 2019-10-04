import React, { PureComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
/* Styles */
import { styles } from './singleCurrencyStyle';

const { container, mainHeadingStyle, aboutWrapper, aboutTitle, aboutDesc } = styles;

class SingleCurrency extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('params')
    });

    isAllDataFetched = () => {
        const { singleSymbol, chartData } = this.props;
        return singleSymbol && chartData;
    };

    titleHeading = (symbol) => {
        if (symbol.price && symbol.price.ask) {
            return (
                <View>
                    <Text style={ mainHeadingStyle }>$ { symbol.price.ask }</Text>
                </View>
            )
        }
    };

    aboutSection = (symbol) => {
        if (symbol.baseInstrument && symbol.baseInstrument.description)
            return (
                <View style={ aboutWrapper }>
                    <Text style={ aboutTitle }>ABOUT</Text>
                    <Text style={ aboutDesc }>{ symbol.baseInstrument.description }</Text>
                </View>
            )
    };

    renderContent = () => {
        const { singleSymbol } = this.props;

        return [this.titleHeading(singleSymbol), this.aboutSection(singleSymbol)]
    };

    render() {
        // console.log(this.props.chartData);
        // console.log(this.props.singleSymbol);

        return (
            <ScrollView style={ container }>
                { this.isAllDataFetched() ? this.renderContent() : null }
            </ScrollView>
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
