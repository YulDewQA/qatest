import {Selector} from 'testcafe'

export default class SauceObjLogin{
    constructor(){
        this.user = Selector('#user-name')
        this.pswd = Selector('input[data-test="password"]')
        this.btnlogin = Selector('.btn_action')

        this.clickmenu = Selector('.bm-burger-button')
        this.clickmenu1 = Selector('button').withText('Open Menu')
        this.clickmenu2 = Selector('.bm-burger-button').withText('Open Menu');
        this.closemenu = Selector('.bm-cross-button')
        this.closemenu1 = Selector('div .bm-cross-button')
        this.closemenu2 = Selector('button').withText('Close Menu')
        this.closemenu3 = Selector('.bm-cross-button').withText('Close Menu');

        this.menuprod1 = Selector('.bm-item.menu-item').withText('All Items')
        this.menuprod2 = Selector('#inventory_sidebar_link')
        
        
        this.menu3 = Selector('a').withText('Logout');
    }
}

/* export class SauceObjProduct{
    constructor(){
        this.dropmenu = Selector('.bm-burger-button')
        this.iconmenu = Selector('button').withText('Open Menu');
        this.kirimEmail = Selector('button').withText('Kirim Email');
        this.closedropmenu = Selector('.bm-cross-button')
        this.allitemmenu = Selector('.bm-item menu-item').withText('All Items');
        this.logoutmenu = Selector('.bm-item menu-item').withText('Logout');
    }
} */
