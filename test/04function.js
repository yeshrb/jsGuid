var assert = require('assert');
var expect = require('expect.js');

describe('函数', function () {
    describe('定义函数', function () {
        it('函数声明', function () {
            function myFun(obj) {
                obj.make = "Toyota";
            }

            var mycar = {make: "Honda", model: "Accord", year: 1998};
            var x, y;
            x = mycar.make;
            myFun(mycar);
            y = mycar.make;
            expect(x === "Honda").to.be(y === "Toyota");
        });

        it('函数表达式', function () {
            var square = function (number) {
                return number * number;
            };
            var x = square(4);
            expect(x).to.be(16);
        });
    });
    describe('函数作用域', () => {
        var num1 = 2,
            num2 = 30,
            name = "Chamahk";
        it('函数能够访问全局范围内定义的变量', () => {
            function multiply() {
                return num1 * num2;
            }

            expect(multiply()).to.be(60);
        });
        it('嵌套函数', () => {
            function getScore() {
                var num1 = 2;
                var num2 = 3;

                function add() {
                    return name + " scored " + (num1 + num2);
                }

                return add();
            }

            expect(getScore()).to.be('Chamahk' + " scored " + 5);
        });
    });
    describe('作用域和函数堆栈', () => {
        it('嵌套函数和闭包', () => {
            function outside(x) {
                function inside(y) {
                    return x + y;
                }

                return inside;
            }

            expect(outside(2)(3)).to.be(5);
        })
        it('多层嵌套函数', () => {
            var sum = 0;

            function A(x) {
                function B(y) {
                    function C(z) {
                        sum = x + y + z;
                    }

                    C(3);
                }

                B(2);
            }

            A(1);
            expect(sum).to.be(6);
        });
        it('命名冲突', () => {
            function outside() {
                var x = 5;

                function inside(x) {
                    return x * 2;
                }

                return inside;
            }

            expect(outside()(10)).to.be(20);
        });
        it('闭包', () => {
            var createPet = function (name) {
                var sex;
                return {
                    setName: function (_name) {
                        name = _name;
                    },
                    getName: function () {
                        return name;
                    },
                    setSex: function (_sex) {
                        if (typeof _sex == "string"
                            && (_sex.toLowerCase() == "male" || _sex.toLowerCase() == "female")) {
                            sex = _sex;
                        }
                    },
                    getSex: function () {
                        return sex;
                    }
                }
            };

            var pet = createPet("Vivie");
            expect(pet.getName() === "Vivie").to.be(true);
            pet.setSex('male');
            expect(pet.getSex() === "male").to.be(true);

        });
        it('使用 arguments 对象',() => {
            function myCount(seperator) {
                var result='';
                for(let i = 1; i<arguments.length; i++){
                    result+=arguments[i]+seperator;
                }
                return result;
            }
            expect(myCount(";","a","b","c")).to.be("a;b;c;");
        });
    });
    describe('函数参数',() => {
        it('默认参数',() => {
            function multiply(a,b=1) {
                return a * b;
            }
            expect(multiply(3)).to.be(3);
            expect(multiply(3,2)).to.be(6);
        });

        it('剩余参数',() => {
            function multiply(multiplier,...theArgs) {
                return theArgs.map(x => x*multiplier);
            }
            expect(multiply(2,1,2,3)[0]===2).to.be(true);
            expect(multiply(2,1,2,3)[1]===4).to.be(true);
            expect(multiply(2,1,2,3)[2]===6).to.be(true);


        });
    });
    describe('箭头函数',() => {
        it('更简洁的函数',() => {
            var a = [
                "Hydrogen",
                "Helium",
                "Lithium",
                "Beryllium"
            ];
            var lens = a.map(x=>x.length);
            expect(lens[0]).to.be(8);
            expect(lens[1]).to.be(6);
            expect(lens[2]).to.be(7);
            expect(lens[3]).to.be(9);
        });
    });
});