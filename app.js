

const versionNumber = '0.1'

//Main menu message only
function printMainMenu(version){
    console.log(`CLI typing tester version ${versionNumber}`);
    console.log('would you like to [T]est, view [S]tatistics  or e[X]it?');
}

printMainMenu(versionNumber);