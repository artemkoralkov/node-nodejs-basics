import { readdir } from 'fs/promises';

export const list = async () => {
    // Write your code here 
    readdir('src/fs/files')
    .then((files) => {
        console.log(files);
    })
    .catch((err) => {
        throw new Error('FS operation failed');
    })
};
list();
