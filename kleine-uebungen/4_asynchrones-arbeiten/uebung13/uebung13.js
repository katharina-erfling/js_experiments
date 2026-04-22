const dns = require('dns')
const IP_V = 4
const URL = 'lilyversell.de'

const getIP = (url, ip) => {
    return new Promise((resolve, reject) => {
        dns.lookup(url, ip, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve({address: data, family: ip});
            }
        });
    });
};

getIP(URL, IP_V)
    .then((data) => console.log(`IP address = ${data.address}`))
    .catch((err) => console.error(err));



