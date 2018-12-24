import UiActions from './action';

export default class UiMidleware {

    static showBookCreationForm() {
        return dispatch => dispatch(UiActions.showBookCreationForm());
    }

    static hideCreationBookForm() {
        return dispatch => dispatch(UiActions.hideCreationBookForm());
    }

    static showSideMenu() {
        return dispatch => dispatch(UiActions.showSideMenu());
    }

    static hideSideMenu() {
        return dispatch => dispatch(UiActions.hideSideMenu());
    }

    static showmHeaderIconSandwish() {
        return dispatch => dispatch(UiActions.showmHeaderIconSandwish());
    }

    static showHeaderIconBackArrow() {
        return dispatch => dispatch(UiActions.showHeaderIconBackArrow());
    }



}