import { unlink } from 'fs';

export const remove = async () => {
    // Write your code here
    unlink('src/fs/files/fileToRemove.txt', err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    }); 
};
remove();