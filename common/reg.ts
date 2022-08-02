const urlReg = /^(http|https):\/\/([\w.]+\/?)\S*$/
const priceReg = /^\d+(\.\d+)?$/
const emojiReg = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi
const nameReg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
const amountReg = /^\d{1,}$/
const nameSpaceReg = /^\S.*\S$|(^\S{0,1}\S$)/
const phoneReg = /^(?:(?:\+|00)86)?1\d{10}$/
const emailReg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordReg = /^(?=.*\d)(?=.*[A-Za-z])([\w!@#$%^&*?]){8,32}$/

export {
    urlReg,
    phoneReg,
    emojiReg,
    nameReg,
    emailReg,
    passwordReg,
    priceReg,
    amountReg,
    nameSpaceReg
}
