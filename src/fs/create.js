import { writeFile } from 'fs';

export const create = async () => {
    // Write your code here 
    writeFile('src/fs/files/fresh.txt', 'I am fresh and young', { flag: 'wx' }, (err) => {
       if (err) {
         throw new Error('FS operation failed');
       }
    })
};
create();