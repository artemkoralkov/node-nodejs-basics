export const parseEnv = () => {
    // Write your code here 
    let res = '';
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) {
            res += `${key}=${value}; `;
        }
      }
      process.stdout.write(res.slice(0, res.length - 2));
};
parseEnv();