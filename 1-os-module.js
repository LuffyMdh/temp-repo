const os = require('os');

// Info on current user
const user = os.userInfo();

// Method returns the system uptime
console.log(`The system uptime: ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);