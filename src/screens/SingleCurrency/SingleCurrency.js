// @flow
import React, { useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
/* Actions */
import { getNewsAction, resetNewsAction } from '../Market/marketActions';
/* Styles */
import { styles } from './singleCurrencyStyle';

let newsParams = {
    Offset: 0,
    Limit: 5
};

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

type Props = {
    resetNews: Function,
    getNews: Function,
    news: Array<Object>,
    singleSymbol: Object,
    getNews: Function,
    isAllNewsFetched: boolean
};

const SingleCurrency = ({ singleSymbol, news, resetNews, getNews, isAllNewsFetched }: Props) => {
    useEffect(() => {
        return () => {
            resetNews();
        };
    }, []);

    const isAllDataFetched = () => {
        return (singleSymbol && news);
    };

    const titleHeading = (symbol) => {
        if (symbol && symbol.price && symbol.price.ask) {
            return (
                <View key={ symbol.id }>
                    <Text style={ mainHeadingStyle }>$ { symbol.price.ask }</Text>
                </View>
            );
        }
    };

    const aboutSection = (symbol) => {
        const { baseInstrument } = symbol;
        if (baseInstrument && baseInstrument.description) {
            return (
                <View key={ baseInstrument.id } style={ aboutWrapper }>
                    <Text style={ aboutTitle }>ABOUT</Text>
                    <Text style={ aboutDesc }>{ baseInstrument.description }</Text>
                </View>
            );
        }
    };

    const onShowMoreBtnPress = () => {
        const newOffset = newsParams.Offset + newsParams.Limit;
        newsParams = {
            ...newsParams,
            Offset: newOffset
        };
        getNews(newOffset);
    };

    const keyExtractor = item => item.id.toString();

    const renderItem = ({ item }) => {
        return (
            <View style={ newsWrapper }>
                <Text style={ newsTitleStyle }>{ item.title }</Text>
                <Text style={ newsDateStyle }>{ moment(item.published).format("DD MMM YYYY") }</Text>
            </View>
        );
    };

    const newsSection = (news) => {
        const INITIAL_NUM_TO_RENDER = news && news.length ? news.length : 1;

        return (
            <View key="newsSection">
                <Text style={ aboutTitle }>NEWS</Text>
                <FlatList
                    data={ news }
                    renderItem={ renderItem }
                    keyExtractor={ keyExtractor }
                    initialNumToRender={ INITIAL_NUM_TO_RENDER }
                    windowSize={ INITIAL_NUM_TO_RENDER }
                />
                { !isAllNewsFetched ? <TouchableOpacity onPress={ onShowMoreBtnPress }>
                    <Text style={ showMore }>SHOW MORE</Text>
                </TouchableOpacity> : null }
            </View>
        );
    };

    const renderContent = () => {
        return [titleHeading(singleSymbol), aboutSection(singleSymbol), newsSection(news)];
    };

    return (
        <ScrollView style={ container }>
            { isAllDataFetched() ? renderContent() : null }
        </ScrollView>
    );
};

SingleCurrency.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('params')
});

const mapStateToProps = (store) => {
    return {
        singleSymbol: store.marketReducer.singleSymbol,
        news: store.marketReducer.news,
        isAllNewsFetched: store.marketReducer.isAllNewsFetched
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNews: offset => dispatch(getNewsAction(offset)),
        resetNews: () => dispatch(resetNewsAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCurrency);
