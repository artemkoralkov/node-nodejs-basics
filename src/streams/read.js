import { createReadStream } from 'fs';

export const read = async () => {
    // Write your code here 
    createReadStream('src/streams/files/fileToRead.txt').on('data', chunk => {
        process.stdout.write(chunk);
    });
};
read();