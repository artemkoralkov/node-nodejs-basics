export const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    let res = '';
    for(let i = 1; i < args.length; i += 2) {
        res += `${args[i - 1].slice(2)} is ${args[i]}, `;
    }
    process.stdout.write(res.slice(0, res.length - 2));
};
parseArgs();