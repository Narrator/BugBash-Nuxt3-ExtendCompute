const os = require('os');

console.log(`Process memory limit: ${process.memoryUsage().heapTotal / (1024 * 1024)} MB`);
console.log(`Total System Memory: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log(`Free System Memory: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);

console.log("Allocating 6GB of memory...");

// Allocate an array of 805,306,368 Float64 elements (~6GB)
const arraySize = Math.floor((6 * 1024 * 1024 * 1024) / 8); 
const memoryHog = new Float64Array(arraySize);

// Fill the array to ensure memory is actually allocated
for (let i = 0; i < memoryHog.length; i++) {
    memoryHog[i] = Math.random();
}

console.log("Memory successfully allocated!");

// Keep the script running so we can observe memory usage
setInterval(() => {
    console.log(process.memoryUsage());
}, 5000);
