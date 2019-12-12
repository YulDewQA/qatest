import {Selector} from 'testcafe';
import ObjectLogin from '../page-objects/Login';
import urladdress from '../urladdress';

const LupaPswdPage = new ObjectLogin();
const email = 'dewicust03@yopmail.com';

fixture `Lupa Password`
    .page `${urladdress.baseUrl}`


test('Forget Pswd', async t => {
    await t
    .setTestSpeed(0.3)
    .click(LupaPswdPage.btnmasuk)
    .click(LupaPswdPage.lupapswd)
    .typeText(LupaPswdPage.fieldemail, email)
    .click(LupaPswdPage.btnlanjut);
});


