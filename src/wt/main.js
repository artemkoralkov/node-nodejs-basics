import { cpus } from 'os';
import { Worker } from 'worker_threads';
export const performCalculations = async () => {
    // Write your code here
    const res = [];
    for(let i = 10; i < cpus().length + 10; ++i) {
        await new Promise((resolve, reject) => {
                const worker = new Worker('./src/wt/worker.js');
                worker.on('message', (msg) => {
                    resolve({'status': 'resolved', 'data': msg});
                });
                worker.on('error', (err) => {
                    reject({'status': 'error', 'data': null})
                });
                worker.postMessage(i);
            })
            .then((value) => {
                res.push(value);
            })
            .catch((error) => {
                res.push(error);
            })
   }
   console.log(res);
   process.exit();
};
performCalculations();