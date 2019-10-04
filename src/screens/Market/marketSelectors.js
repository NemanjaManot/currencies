import { createSelector } from 'reselect';

export const getFullSymbolsList = createSelector(
    state => state.marketReducer.symbols,
    state => state.marketReducer.watchList,
    (symbols, watchList) => {
        if (symbols && watchList) {
            return symbols.map(el => {
                if (watchList.find(el2 => el.id === el2.id)) {
                    el.isFavorite = true;
                }
                return el;
            });
        }
    }
);
