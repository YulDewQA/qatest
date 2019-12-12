import {Selector} from 'testcafe'

export default class ObjectLogin {
    constructor() {
        this.btnmasuk = Selector('.btn.btn-navbar.pintek-black.anchor.text-16').withText('Masuk');
        this.lupapswd = Selector('.text-16.pull-right.pintek-blue').withText('Lupa Kata Sandi?');
        this.fieldemail = Selector('input[name="email"]');
        this.btnlanjut = Selector('.btn.btn-lg.pintek-bg-blue.white.text-16');
    }
}