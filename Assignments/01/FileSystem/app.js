const fs = require('fs/promises');

// create file
const myfileWriter = async(filename, filecontent) => {
    try {
        await fs.writeFile(filename, filecontent);
        console.log(`${filename} is create with content ${filecontent}`);
    } catch(err){
        console.log(`Error creating ${filename}`);
    }
}

// file reader
const myfileReader = async(filename) => {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        console.log(`${filename} contains the following data: ${data}`);
    } catch(err) {
        console.log(err);
    }
}

// file updating the content

const myfileUpdater = async(filename, filecontent) => {
    try{
        await fs.appendFile(filename, filecontent); 
        console.log(`${filename} is updated with following text: \n${filecontent}`);
    }
    catch(err) {
        console.log(err);
    }
    
}



// deleting the file
const myfileDeleter = async(filename) => {
    try {
        await fs.unlink(filename);
        console.log(`${filename} has been deleted`);
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    myfileWriter,
    myfileReader,
    myfileUpdater,
    myfileDeleter,
}