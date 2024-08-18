export default function moneyFormatter(money: string | number) {
    if (typeof money === 'string') {
        return Number(money).toLocaleString(undefined, { maximumFractionDigits: 2 })
    } else {
        return money.toLocaleString(undefined, { maximumFractionDigits: 2 })
    }
}