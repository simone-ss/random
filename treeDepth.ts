
const deepOne: string = '{"1":""}';
const deepTwo: string = '{"1":{"2":""}}';
const deepThree: string = '{"1":{"2":{"3":""}},"x":{}}';

function calcDepth(obj: any): number {
    if (Object.getOwnPropertyNames(obj).length === 0) {
        return 0;
    }
    let depth: number = 1;
    for(const key in obj) {
        if(typeof obj[key] === 'object'){
            const childDepth: number = 1 + calcDepth(obj[key]);
            depth = Math.max(depth, childDepth);
        }
    }
    return depth;
}

console.assert(calcDepth({}) === 0);
console.assert(calcDepth(JSON.parse(deepOne)) === 1);
console.assert(calcDepth(JSON.parse(deepTwo)) === 2);
console.assert(calcDepth(JSON.parse(deepThree)) === 3);
