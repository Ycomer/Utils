// 数组去重
function dedupe(array) {
    return Array.from(new Set(array));
}
// 其他转化为对象
function strMapToObj(strMap) {
    let obj  = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
// 对象转Map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k])
    }
    return strMap
}