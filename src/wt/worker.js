// n should be received from main thread
import {  parentPort } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.on('message', (msg) => {
        try {
            parentPort.postMessage(nthFibonacci(msg));
        }
        catch (err) {
            throw err;
        }
    })
   
};
sendResult();