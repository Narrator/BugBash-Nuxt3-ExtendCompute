console.log(`Process memory limit: ${process.memoryUsage().heapTotal / (1024 * 1024)} MB`);
console.log(`System free memory: ${os.freemem() / (1024 * 1024)} MB`);
