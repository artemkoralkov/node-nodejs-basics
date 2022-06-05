import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const calculateHash = async () => {
    // Write your code here
    createReadStream('src/hash/files/fileToCalculateHashFor.txt').on('data', (chunk) => {
        console.log(createHash('sha256').update(chunk).digest('hex'));
        
    });
};
calculateHash();