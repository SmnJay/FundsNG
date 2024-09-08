export function PaystackKoboConverter(amount: number | string) {
    return Number(amount) * 100;
}

export const PaystackConfig = (email: string, amount: number) => {
    return ({
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount * 100,
        publicKey: "pk_test_bbfc5cbc4a3c1e1c50ad34cbf4383512aa389fdc"
    })
}