// index.js
// Demonstration of the use of the os module in Node.js for monitoring system performance and resource usage.

// Import the 'os' module to access system-related utility methods
const os = require("os");

// Function to get system statistics
function getSystemStats() {
  // Get total and free memory in bytes
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();

  // Get the CPU usage information
  const cpus = os.cpus();
  const cpuCount = cpus.length;

  // Calculate CPU load average (1, 5, and 15 minutes)
  const loadAverage = os.loadavg();

  // Format memory usage in MB
  const totalMemoryMB = (totalMemory / (1024 * 1024)).toFixed(2);
  const freeMemoryMB = (freeMemory / (1024 * 1024)).toFixed(2);

  console.log(`System Statistics:`);
  console.log(`- Total Memory: ${totalMemoryMB} MB`);
  console.log(`- Free Memory: ${freeMemoryMB} MB`);
  console.log(`- Number of CPUs: ${cpuCount}`);
  console.log(`- Load Average (1, 5, 15 mins): ${loadAverage.join(", ")}`);

  console.log(`CPU Details:`);
  cpus.forEach((cpu, index) => {
    console.log(`- CPU ${index + 1}:`);
    console.log(`  Model: ${cpu.model}`);
    console.log(`  Speed: ${cpu.speed} MHz`);
    console.log(`  Times: ${JSON.stringify(cpu.times)}`);
  });
}

// Function to run the system stats display periodically
function monitorSystem() {
  console.log(`Monitoring system performance every 5 seconds...\n`);
  setInterval(getSystemStats, 5000);
}

// Start monitoring the system
monitorSystem();

/** Output (based on my system):
 *  Monitoring system performance every 5 seconds...

    System Statistics:
    - Total Memory: 8151.11 MB
    - Free Memory: 2038.88 MB
    - Number of CPUs: 4
    - Load Average (1, 5, 15 mins): 0, 0, 0
    CPU Details:
    - CPU 1:
    Model: Intel(R) Core(TM) i5 CPU         760  @ 2.80GHz
    Speed: 2793 MHz
    Times: {"user":5586031,"nice":0,"sys":2487531,"idle":22555875,"irq":194312}
    - CPU 2:
    Model: Intel(R) Core(TM) i5 CPU         760  @ 2.80GHz
    Speed: 2793 MHz
    Times: {"user":5493843,"nice":0,"sys":2229171,"idle":22906203,"irq":43015}
    - CPU 3:
    Model: Intel(R) Core(TM) i5 CPU         760  @ 2.80GHz
    Speed: 2793 MHz
    Times: {"user":4936250,"nice":0,"sys":1564796,"idle":24128156,"irq":12687}
    - CPU 4:
    Model: Intel(R) Core(TM) i5 CPU         760  @ 2.80GHz
    Speed: 2793 MHz
    Times: {"user":3887296,"nice":0,"sys":1002406,"idle":25739484,"irq":5453}
 */

/*
Explanation:
1. Import the 'os' Module:
   - The 'os' module provides operating system-related utility methods and properties. We import it at the beginning of the script using require('os').

2. Get System Statistics:
   - Memory Usage:
     - os.totalmem(): Returns the total system memory in bytes.
     - os.freemem(): Returns the free system memory in bytes.
     - These values are converted from bytes to megabytes for easier readability.
   - CPU Information:
     - os.cpus(): Returns an array of objects containing information about each logical CPU core.
   - Load Average:
     - os.loadavg(): Returns an array with the system load averages over the last 1, 5, and 15 minutes.

3. Display the Information:
   - The getSystemStats function formats and logs memory usage, CPU count, and load averages to the console.
   - It also lists details for each CPU core, including the model, speed, and times for various states (user, nice, sys, idle, and irq).

4. Monitor Periodically:
   - The monitorSystem function uses setInterval to call getSystemStats every 5 seconds, providing continuous monitoring of the system’s performance.

*/
