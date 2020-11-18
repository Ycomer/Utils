// 数组去重
function dedupe(array) {
    return Array.from(new Set(array));
}
// 其他转化为对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
// 对象转Map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
// 深浅拷贝的区别
// 一个对象浅拷贝后，是深层次的对象地址的复制，并没有开辟新的栈，也就是复制的结果是两个对象指向同一个地址，修改其中一个对象的属性，则另一个对象的属性也会发生改变，
// 深拷贝的则是开辟了一个新的栈，两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

// 浅拷贝
// 1. ...实现(有多个对象)
let obj = { x: 1 };
let copy1 = { ...obj };
// console.log(copy1)

// 2. Object.assign实现
let obj = { x: 1 };
let copy2 = Object.assign({}, obj);

// 深拷贝

let obj = { a: 1, b: { x: 3 } };
let copy1 = JSON.stringify(obj);
let copy2 = JSON.parse(copy1);
// 2. 递归拷贝

function deepClone(obj) {
    // instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
    let copy = obj instanceof Array ? [] : {};
    for (let i in obj) {
        // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
        if (obj.hasOwnProperty(i)) {
            // typeof 操作符返回一个字符串，表示未经计算的操作数的类型。
            copy[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
        }
    }
    return copy;
}

// 判断封装
let class2type = {};
"Array Date RegExp Object Error"
    .split(" ")
    .forEach((e) => (class2type["[object " + e + "]"] = e.toLowerCase()));

function type(obj) {
    if (obj == null) return String(obj);
    return typeof obj === "object"
        ? class2type[Object.prototype.toString.call(obj)] || "object"
        : typeof obj;
}

// 防抖
// 防抖 (debounce): 将多次高频操作优化为只在最后一次执行，通常使用的场景是：用户输入，只需再输入完成后做一次输入校验即可。
function debounce(fn, wait, immediate) {
    let timer = null;

    return function () {
        let args = arguments;
        let context = this;

        if (immediate && !timer) {
            //  显示绑定this
            fn.apply(context, args);
        }

        if (timer) clearInterval(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    };
}
// 节流
// 节流(throttle): 每隔一段时间后执行一次，也就是降低频率，将高频操作优化成低频操作，通常使用场景: 滚动条事件 或者 resize 事件，通常每隔 100~500 ms执行一次即可。

function throttle(fn, wait, immediate) {
    let timer = null;
    let callNow = immediate;

    return function () {
        let context = this,
            args = arguments;

        if (callNow) {
            fn.apply(context, args);
            callNow = false;
        }
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, wait);
        }
    };
}

// 依据：如果Object方法的参数是一个对象，它总是返回该对象，即不用转换。
// 判断变量是否为对象的函数
function isObject(value) {
    return value === Object(value);
}
// 依据：getOwnPropertyNames可以返回对象的不可枚举属性
// 计算对象属性的个数
function computPropertyNum(value) {
    return Object.getOwnPropertyNames(value).length;
}

// 类型判断函数，比typeof更准确
// o是接受的输入值

let type = function (o) {
    let s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

//  增加专门判断某种数据类型的方法
let list = [
    "Null",
    "Undefined",
    "Object",
    "Array",
    "String",
    "Number",
    "Boolean",
    "Function",
    "RegExp",
];
if (list) {
    list.forEach(function (t) {
        // type['is' + t] 将每一个方法赋值给type对象中的每一个属性名，同时这种方式也可以读取属性名，也可以采用type.isNull的方式
        type["is" + t] = function (o) {
            return type(o) === t.toLowerCase();
        };
    });
}
