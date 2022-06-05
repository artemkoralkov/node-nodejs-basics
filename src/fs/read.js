import { readFile } from 'fs/promises';

export const read = async () => {
    // Write your code here 
    readFile('src/fs/files/fileToRead.txt', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        throw new Error('FS operation failed');
    });
};
read();