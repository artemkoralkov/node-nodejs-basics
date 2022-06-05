import { createWriteStream } from 'fs';

export const write = async () => {
    // Write your code here 
    //
    process.stdin.pipe(createWriteStream('streams/files/fileToWrite.txt'));
};
write();