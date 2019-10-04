import React, { PureComponent } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
/* Styles */
import { styles } from './singleCurrencyStyle';

const {
    container,
    mainHeadingStyle,
    aboutWrapper,
    aboutTitle,
    aboutDesc,
    newsTitleStyle,
    newsDateStyle,
    newsWrapper,
    showMore
} = styles;

class SingleCurrency extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('params')
    });

    isAllDataFetched = () => {
        const { singleSymbol, news } = this.props;
        return singleSymbol && news;
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

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => {
        return (
            <View style={ newsWrapper }>
                <Text style={ newsTitleStyle }>{ item.title }</Text>
                <Text style={ newsDateStyle }>{ item.published }</Text>
            </View>
        )
    };

    newsSection = () => {
        const { news } = this.props;
        const INITIAL_NUM_TO_RENDER = news && news.length ? news.length : 1;

        return (
            <View>
                <Text style={ aboutTitle }>NEWS</Text>
                <FlatList
                    data={ this.props.news }
                    renderItem={ this.renderItem }
                    keyExtractor={ this.keyExtractor }
                    initialNumToRender={ INITIAL_NUM_TO_RENDER }
                    windowSize={ INITIAL_NUM_TO_RENDER }
                />
                <TouchableOpacity>
                    <Text style={ showMore }>SHOW MORE</Text>
                </TouchableOpacity>
            </View>
        )
    };

    renderContent = () => {
        const { singleSymbol, news } = this.props;

        return [this.titleHeading(singleSymbol), this.aboutSection(singleSymbol), this.newsSection(news)]
    };

    render() {
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
        news: store.marketReducer.news
    };
};

export default connect(mapStateToProps, null)(SingleCurrency);
