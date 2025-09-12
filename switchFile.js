const readline = require('readline-sync');

const fs = require('fs');

const choice = readline.question("Enter your choice (1-5): ");

switch (choice) {
    case '1':
        fs.writeFileSync('switch.txt', "hello");
        console.log("File created successfully");
        break;

    case '2':
        const content = fs.readFileSync('switch.txt', 'utf-8');
        console.log('File content:', content);
        break;

    case '3':
        fs.appendFileSync('switch.txt', ' mitron');
        console.log('File updated successfully');
        break;

    case '4':
        fs.renameSync('switch.txt', 'abc.txt');
        console.log('File renamed successfully');
        break;

    case '5':
        fs.unlinkSync('abc.txt');
        console.log('File deleted successfully');
        break;

    default:
        console.log('Invalid choice');
        break;
}

