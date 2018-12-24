import * as ActionsTypes from './constants';

export default class UIAction {

    static hideSideMenu() {
        return {
            type: ActionsTypes.HIDE_SIDE_MENU
        }
    }

    static showSideMenu() {
        return {
            type: ActionsTypes.SHOW_SIDE_MENU
        }
    }

    static hideCreationBookForm() {
        return {
            type: ActionsTypes.HIDE_BOOK_CREATION_FORM
        }
    }

    static showBookCreationForm() {
        return {
            type: ActionsTypes.SHOW_BOOK_CREATION_FORM
        }
    }


    static showmHeaderIconSandwish() {
        return {
            type: ActionsTypes.SHOW_MAIN_SANDWISH_MENU
        }
    }


    static showHeaderIconBackArrow() {
        return {
            type: ActionsTypes.SHOW_MAIN_RETURN_BUTTON
        }
    }

}