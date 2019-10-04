import { createSelector } from 'reselect';

export const getUserIdSelector = createSelector(
    state => state.userReducer.userId,
    (userId) => {
        return userId;
    }
);
