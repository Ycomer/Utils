// 生成一个随机整数，范围是[min,max]
export default function RandomInit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成一个随机的hex在0-f之间
export default function getHex() {
    let n = 0;
    for (let i = 4; i > 0; i--) {
        n = (RandomInit(0, 1) << (i - 1)) + n;
    }
    return n.toString(16);
}

// 生成一个32位的hex,用作一次性key
export default function getOTP() {
    const arr = [];
    for (let i = 0; i < 32; i++) {
        arr.push(getHex());
    }
    return arr.join("");
}
