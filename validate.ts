import {phoneReg,emailReg, passwordReg, emojiReg} from '../common/reg'
/**
 * 校验邮箱
 * @param email
 * @returns {boolean}
 */
 function checkEmail (email: string) {
    if (!email) return false
    return emailReg.test(email.toLowerCase())
  }
  
  /**
   * 校验电话号码
   * @param phone
   * @returns {boolean}
   */
  function checkPhone (phone: string) {
    if (!phone) return false
    return phoneReg.test(phone)
  }
  
  /**
   * 校验密码
   * @param value
   * @returns {boolean}
   */
  function checkPassword (value: string) {
    if (!value) return false
    return passwordReg.test(value)
  }
  
  const checkEmojiReg = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi
  function checkEmoji (value: string) {
    if (!value) return false
    const reg = checkEmojiReg
    if (reg.test(value)) {
      return true
    }
    return false
  }
  
  function checkAccountType(account: string) {
    if (checkEmail(account)) return 'email'
    else if (checkPhone(account)) return 'phone'
    else return ''
  }
  
  export {
    checkEmail,
    checkPhone,
    checkPassword,
    checkEmoji,
    checkEmojiReg,
    checkAccountType,
  }
  
  