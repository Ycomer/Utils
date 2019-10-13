function getQueryStringargs() {
    // 取得查询字符串并去掉开头的问号
    let qs = location.search.length > 0 ?location.search.substring(1) : '',
    // 保存数据的对象
    args = {},
    // 取得每一项数据
    items = qs.length ? qs.split('&'): [],
    item = null,
    name = null,
    value = null;
    
    // 逐渐将每一项添加到args对象中
    for (let i = 0; i < items.length; i++) {
        // 将每一组
        item = items[i].split('=');
        console.log(item, 'item')
        // 解码，因为name和value是被编码过的
        name = decodeURIComponent(item[0])
        value = decodeURIComponent(item[1])
        if(name.length) {
            args[name] = value
        }
    }
    return args
}