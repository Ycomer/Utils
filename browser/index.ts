const getBrowserName = (): string => {
    const userAgent = navigator.userAgent || navigator.vendor
    if (userAgent.match(/Firefox/i)) {
        return 'Firefox'
    } else if (userAgent.match(/Chrome/i)) {
        return 'Chrome'
    } else if (userAgent.match(/Opera/i)) {
        return 'Opera'
    } else if (userAgent.match(/Safari/i)) {
        return 'Safari'
    } else {
        return 'unknown'
    }
}

const getMobileSystem = () :string  => {
    const userAgent: string = navigator.userAgent
    if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1) {
        return 'android'
    } else if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) {
        return 'ios'
    } else {
        return 'unknown'
    }
}

const fileToBase64 = (file:File) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
        resolve(reader.result)
        }
        reader.onerror = (error) => {
        reject(error)
        }
    })
}

const base64ToFile = (base64:string, name:string) => {
    const arr = base64.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], name, { type: mime })
}

const upperCaseFirstLetter = (str:string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const getUrlQuery = (url:string) => {
    const result: {[key:string]:any} = {};
    const search = decodeURIComponent(url ? url: location.search);
    const tempArr = search !== '' ? search.substr(1).split('&') : [];
    tempArr.forEach(item => {
      const temp = item.split('=');
      result[temp[0]] = temp[1];
    })
    return result
}