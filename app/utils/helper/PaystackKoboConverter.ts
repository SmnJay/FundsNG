export function PaystackKoboConverter(amount: number | string) {
    return Number(amount) * 100;
}

export const PaystackConfig = (email: string, amount: string) => {
    return ({
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount,
        publicKey: process.env.PAYSTACK_PUBLIC_KEY
    })
}