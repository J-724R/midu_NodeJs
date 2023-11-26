const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls(directory) {
    let files
    try {
        files = await fs.readdir(directory)
    } catch {
        console.error(pc.red(`No se pudo lee el directorio: ${directory}`));
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(directory, file)
        let stats

        try {
            stats = await fs.stat(filePath) //status - informacion del archivo
        } catch {
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1)
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size / 1024;
        const fileModified = stats.mtime.toLocaleString()

        return `${pc.bgMagenta(fileType + " ")} ${pc.blue(file.padEnd(35))} ${pc.green(fileSize.toString().padStart(15))} ${pc.yellow(fileModified)}`
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder.toString())
