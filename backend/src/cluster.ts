import cluster from 'cluster';
import os from 'os';
import { start } from './server';

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`🏟️ Master Cluster PID ${process.pid} is running.`);
  console.log(`⚡ Forking ${numCPUs} Fastify worker instances for 10,000 concurrent user scaling...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.warn(`Worker ${worker.process.pid} died (${signal || code}). Spawning a replacement worker...`);
    cluster.fork();
  });
} else {
  start();
}
