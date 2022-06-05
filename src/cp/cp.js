import { spawn } from 'child_process'
export const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node',['src/cp/files/script.js', ...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};
spawnChildProcess(['foo', 'bar']);