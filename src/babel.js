import {random} from "lodash";

async function start() {
    return await Promise.resolve('async is working')
}

start().then(console.log)


class Util {
    static id = Date.now()
}

console.log(Util.id)


import ('lodash').then(() => {console.log('Lodash', random(0, 42))})