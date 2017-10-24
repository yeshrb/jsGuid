var assert = require('assert');
var expect = require('expect.js');

describe('变量', function() {
    describe('变量求值', function() {
        it('访问未赋值变量会得到undefined', function() {
            var a;
            expect(a).to.be(undefined);

        });

        it('在声明前访问变量，变量是undefined', function() {
            assert.equal(b,undefined);
            var b;
        });
        it('访问未声明变量会抛出ReferenceError', function() {
            expect(function () {
                console.log(c);
            }).to.throwException(function (e) {
                expect(e).to.be.a(ReferenceError);
            });

        });

        it('访问let 声明的未赋值变量值为undefined', function() {
            let b;
            assert.equal(b,undefined);

        });

        it('在用let声明变量之前访问变量会抛出ReferenceError', function() {
           expect( function () {
               console.log(d);
           }).to.throwException(function (e) {
               expect(e).to.be.a(ReferenceError);
           });
           let d;
        });

        it('可以使用 undefined 来判断变量是否已赋值', function() {
            let input;
            expect(input === undefined).to.be(true);
        });

        it('undefined 值在布尔类型环境中会被当作 false', function() {
            let input = [];
            expect(!input[0]).to.be(true);
        });

        it('undefined 值在数值类型环境中会被当作 NaN', function() {
            let a;
            expect(isNaN(a + 2)).to.be(true);
        });

    });

    describe('变量的作用域',function () {
        it('var 声明的变量是全局的不是块级的',()=>{
            if (true) {
                var x = 5;
            }
            expect(x).to.be(5);
        });

        it('let是块级声明',()=>{
            if (true) {
                let x = 5;
            }
            expect(() => {x}).to.throwException(function (e) {
                expect(e).to.be.a(ReferenceError);
            });
        });
    });

    describe('变量声明提升（Variable hoisting）',function () {
        it('你可以引用稍后声明的变量而不会引发异常',()=>{
            expect(()=>{x}).to.not.throwError();
            var x;
        });

        it('提升后在初始化前引用会得到undefined值',()=>{
            expect(x).to.be(undefined);
            var x = 5;
        });

        it('let（const）将不会提升变量到代码块的顶部',() => {
            expect(() => {
                x;
            }).to.throwException(e => {
                expect(e).to.be.a(ReferenceError);
            });
            let x = 10;
        });
    });

    describe('对于函数，只有函数声明会被提升到顶部，而不包括函数表达式',() => {
        it('函数声明会被提升',()=> {
            expect(foo()).to.be('bar');
            function foo() {
                return 'bar';
            }
        });
        it('匿名函数没有函数提升',() => {
            expect(() =>{baz()}).to.throwException(e => {
                expect(e).to.be.a(TypeError);
            });

            var baz = function() {
                console.log("bar2");
            };
        });
    });

    describe('数据类型',() => {
        it('JS有六种原型数据类型和Object类型:\n\tBoolean\n\tnull\n\tundefined\n\tNumber\n\tString\n\tSymbol\n\tObject',()=> {
            expect(typeof true).to.be('boolean');
            var x;
            expect(typeof x).to.be('undefined');
            expect(typeof 123).to.be('number');
            expect(typeof '123').to.be('string');
            const bar = Symbol();
            expect(typeof bar).to.be('symbol');
            var y = {};
            expect(typeof y).to.be('object');
        });

    });
});