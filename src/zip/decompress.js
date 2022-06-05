import { createReadStream, createWriteStream, unlink } from 'fs';
import { createGunzip } from 'zlib';
export const decompress = async () => {
    // Write your code here 
    createReadStream('src/zip/files/archive.gz')
    .pipe(createGunzip())
    .pipe(createWriteStream('src/zip/files/fileToCompress.txt'))
    .on('close', () => {
        unlink('src/zip/files/archive.gz', (err) => {
            console.log(err);
        });
    });
};
decompress();