import { createSelector } from 'reselect';

export const getFullSymbolsList = createSelector(
    state => state.marketReducer.symbols,
    state => state.marketReducer.watchList,
    (symbols, watchList) => {
        if (symbols && watchList) {
            return symbols.map(symbol => {
                if (watchList.find(item => symbol.id === item.id)) {
                    symbol.isFavorite = true;
                }
                return symbol;
            });
        }
    }
);
