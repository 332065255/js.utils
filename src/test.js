var utils=require('./index.js');

function hello(name){
    console.log('hello',name);

}
var a=utils.once(hello);
a('lilei');
a('hanmeimei');