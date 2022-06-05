import { readFile, rename as renameFile} from 'fs';
export const rename = async () => {
    // Write your code here 
    readFile('src/fs/files/wrongFilename.txt', 'utf-8', (err,data) =>{
        if (err) {
            throw new Error('FS operation failed');
        }
        else {
            readFile('src/fs/files/properFilename.md', 'utf-8', (err,data) => {
                if (err) {
                    renameFile('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md',(err) => {});
                }
                else {
                    throw new Error('FS operation failed');
                }
            });
        }
    });
    
};
rename();