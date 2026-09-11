import { open, FileHandle, mkdir } from 'node:fs/promises';

async function createDirectory(directory:string)
{
    try{
        await mkdir(directory);
    }
    catch(exception){
        console.log(exception.message);
        console.log("Ignoring creation of directory...")
    }
    
}



export async function openJsonDataFile(directory:string, fileName : string) : Promise<FileHandle> {
    
    let fileHandler : FileHandle;

    await createDirectory(directory)

    const path = directory + fileName;
    try{
        fileHandler = await open(path, "r+"); // reading and writing, exception if not exist
    }
    catch(exception){
        console.log(exception.message);
        fileHandler = await open(path, "w+"); // read and writing, replaces if exist else creates
        console.log(`Creating ${path}...`)
    }
    return fileHandler;
}

export async function closeJsonDataFile(fileHandler: FileHandle) {
    await fileHandler.close();
}