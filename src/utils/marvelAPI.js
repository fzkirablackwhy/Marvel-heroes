import api from 'marvel-api';

const PRIV_KEY = 'e7b24e46b8e182c47d9f5a69a09464f96a52bcda';
export const PUBLIC_KEY= '85c342578b799c5ba4e507d5bb08ff8e';
export const marvel = api.createClient({
    publicKey: PUBLIC_KEY,
    privateKey: PRIV_KEY
});
