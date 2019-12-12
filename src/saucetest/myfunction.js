import {Selector} from 'testcafe'
import SauceObjLogin from '../saucetest/myobject'
import SauceObjProduct from '../saucetest/myobject'
import myurl from '../saucetest/myurl'

const RunPage1 = new SauceObjLogin()
//const RunPage2 = new SauceObjProduct()
const user1 = 'standard_user'
const password = 'secret_sauce'

fixture `Open Page`
    .page `${myurl.address1}`

test('Forget Pswd', async t => {

    await t
    .setTestSpeed(0.9)
    .typeText(RunPage1.user, user1)
    .typeText(RunPage1.pswd, password)
    .click(RunPage1.btnlogin)
    .click(RunPage1.clickmenu2)
    .wait(5000)
    //.click(RunPage1.closemenu3)
    
    
    .navigateTo(`${myurl.address1}inventory.html`)
    .navigateTo(`${myurl.address}/index.html`)
    .navigateTo(`${myurl.address2}`)
    //.click(RunPage1.menu3);


   /*  .click(RunPage2.iconmenu)
    .click(RunPage2.dropmenu)
    .click(RunPage2.allitemmenu)
    .click(RunPage2.closedropmenu)
    .click(RunPage2.dropmenu)
    .click(RunPage2.logoutmenu); */
})

/*test('Product Page', async t => {
    await t
    .setTestSpeed(0.3)*/
    