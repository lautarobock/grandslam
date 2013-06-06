/**
 * Created with JetBrains WebStorm.
 * User: lautaro
 * Date: 6/06/13
 * Time: 8:29
 * To change this template use File | Settings | File Templates.
 */

//expresso test
//exports.testClient = function(beforeExit,assert) {
//    console.log("bla");
//    assert.equal("Hola","Hola");
//};

//Nodeunit
exports.testClient = function(test) {
    test.expect(1);
    test.ok(true,"Test pasado")
    test.done();
};