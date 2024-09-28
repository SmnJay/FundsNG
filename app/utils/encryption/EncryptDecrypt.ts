import CryptoJS from 'crypto-js';

const encryptionKey = process.env.NEXT_PUBLIC_AES_ENCRYPTION_KEY!;
const encryptionIV = process.env.NEXT_PUBLIC_AES_ENCRYPTION_IV!;

export const encryptData = (data: any): string | null => {
    try {
        const key = CryptoJS.enc.Utf8.parse(encryptionKey);
        const iv = CryptoJS.enc.Base64.parse(encryptionIV);

        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encrypted.toString();
    } catch (error) {
        console.error('Encryption error:', error);
        return null;
    }
};

export const decryptData = (cipherText: string): any | null => {
    try {
        const key = CryptoJS.enc.Utf8.parse(encryptionKey);
        const iv = CryptoJS.enc.Base64.parse(encryptionIV);

        const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });

        const decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedData);
    } catch (error) {
        console.error('Decryption error:', error);
        return null;
    }
};