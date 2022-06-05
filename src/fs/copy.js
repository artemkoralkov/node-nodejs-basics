import { readdir, mkdir, copyFile } from 'fs';

export const copy = async () => {
    // Write your code here 
    readdir('src/fs/files_copy', (err,data) => {
        if (data) {
            throw Error('FS operation failed');
        }
        else {
            readdir('src/fs/files', (err,data) => {
                if (err) {
                    throw new Error('FS operation failed');
                }
                else {
                    mkdir('src/fs/files_copy', err => {
                        data.forEach(file => {
                            copyFile(`src/fs/files/${file}`, `src/fs/files_copy/${file}`,err => {});
                        })
                    })
                }
            })
        }
    })
};
copy();