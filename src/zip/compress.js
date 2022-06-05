import { createReadStream, createWriteStream, unlink } from 'fs';
import { createGzip } from 'zlib';
export const compress = async () => {
    // Write your code here 
    createReadStream('src/zip/files/fileToCompress.txt', 'utf-8')
    .pipe(createGzip())
    .pipe(createWriteStream('src/zip/files/archive.gz'))
    .on('close', () => {
        unlink('src/zip/files/fileToCompress.txt', (err) => {
            console.log(err);
        });
    });
};
compress();