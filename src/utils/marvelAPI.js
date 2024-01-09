import api from 'marvel-api';

const PRIV_KEY = '742feadd1fab6ca2284103d76763aa18ef4f123a';
export const PUBLIC_KEY= '91ddf64718b3221b5321a441380c2b96';
export const marvel = api.createClient({
    publicKey: PUBLIC_KEY,
    privateKey: PRIV_KEY
});
