
var assert = require('assert');
var expect = require('expect.js');

describe('循环与迭代', () => {
    describe('循环语句', () => {
        var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var obj = {
            name: 'lijumjie',
            age : 25
        };
        obj.foo = "hello";
        let arr = [3, 5, 7];
        arr.foo = "hello";
        traversesArrayWithFor(items);
        traversesArrayWithDoWhile(items);
        traversesArrayWithWhile(items);
        it("for-in遍历对象的属性",() => {
            var result='';
            for(pro in obj){
                result += pro +":"+obj[pro]+'\n';
            }
            expect(result).to.be('name:lijumjie\n' +
                            'age:25\n' +
                            'foo:hello\n');
            });

        it("for-of遍历可迭代对象(包括Array, Map, Set, 参数对象(arguments)等等)",() => {
            var result='';
            for(let pro of arr){
                result += pro +'\n';
            }
            expect(result).to.be('3\n' +
                '5\n' +
                '7\n');
        });
    });
    function traversesArrayWithFor(arr) {
        it('for语句遍历数组', () => {
            function sum(arr) {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                return sum;
            }

            expect(sum(arr)).to.be(55);

        });
    }
    function traversesArrayWithDoWhile(arr) {
        it('do-while语句遍历数组',()=> {
            function sum(arr) {
                let sum = 0;
                let i = 0;
                do {
                    sum+= i;
                    i++;

                } while(i <= arr.length);
                return sum;
            }
            expect(sum(arr)).to.be(55);
        });
    }
    function traversesArrayWithWhile(arr) {
        it('do-while语句遍历数组',()=> {
            function sum(arr) {
                let sum = 0;
                let i = 0;
                while(i <= arr.length){
                    sum += i;
                    i++;
                }
                return sum;
            }
            expect(sum(arr)).to.be(55);
        });
    }


});