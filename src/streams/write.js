import { createWriteStream } from 'fs';

export const write = async () => {
    // Write your code here 
    process.stdin.pipe(createWriteStream('src/streams/files/fileToWrite.txt'));
};
write();