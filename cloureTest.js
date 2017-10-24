function a() {
    var x = 0;
    return function(y) {
        x = x + y;
        // return x;
        console.log(x);
    }
}
var b = a();
b(1); //1
b(1); //2

var outerValue ='ninja';
var later;
function outerFunction() {
    var innerValue = 'samurai';

    function innerFunction() {
        console.log(outerValue,'I can see the ninja.');
        console.log(innerValue,'I can see th samurai');
    }

    later = innerFunction;
}

outerFunction();
later();

function isGTTen(x) {
    var _x = x;
    return function (y) {
        return y > _x;
    }
}

var fn = isGTTen(15);
console.log(fn(12));
console.log(fn(9));

var max = 10;
fn1 = function (x) {
    if (x > max)
        console.log(x);
};

(function (f) {
    var max = 100;
    console.log('inner max:'+ max);
    f(15);
})(fn1);

function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function() {
            return i;
        };
    }
    return result;
}
var funcs = createFunctions();
//每个函数都输出10
for (var i = 0; i < funcs.length; i++) {
    console.log(funcs[i]() + "<br />");
}