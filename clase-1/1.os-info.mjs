import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Informacion del sistema operativo:')
console.log('----------------------------------');

console.log('Nombre del sistema operativo', platform());
console.log('Version del sistema operativo', release());
console.log('Arquitectura', arch());
console.log('CPUs', cpus().length , cpus());
console.log('Memoria libre', freemem()/1024/1240, 'Gb' );
console.log('Memoria total', totalmem()/1024/1240, 'Gb' );
console.log('uptime', uptime()/60/60);