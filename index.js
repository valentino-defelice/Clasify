var fs = require('fs');

let path = './musica';
let folders = ['cumbia', 'reggaeton', 'trap', 'pop'];

fs.readdir(path, function(err, items) {
    
    // check folders
    for(let folder in folders) {
        dir = "./"+folders[folder];
        console.log("dir: " + dir);
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            console.log("folder created: " + dir);
        }
        if(fs.existsSync(dir)) {
            console.log("path exist");
        }
    }

    if(err) {
        console.log(err);
    }
    else {
        //console.log(items);
        for(let i of items) {
            clasify(i);
        }
    }
});

async function clasify(song_name) {
    // try with reggaeton
    reggaeton(song_name);

    // try with cumbia
}

async function reggaeton(song_name) {
    
    //path where will be moved the song
    let path_reggaeton = './reggaeton';

    // artists variable
    let reggaeton_artists = ['daddy yankee'];

    for(let artist of reggaeton_artists) {
        if(artist.includes(' ')) {
            artist = artist.split(' ');
            if(song_name.includes(artist[1], artist[2])) {
                copy(path_reggaeton, song_name);
            }
        }
        else if(song_name.includes(artist)) {
            copy(path_reggaeton, song_name);
        }
    }
}

async function cumbia(song_name) {
    // artists variable
    let cumbia_artists = ['daddy yankee'];
}

async function copy(path, song_name) {
    actualPath = "./musica/" + song_name;
    newPath = "./" + path +"/" + song_name;
    fs.rename(actualPath, newPath, function(err) {
        if (err) console.log(err);
        else {
            console.log('moved to reggaeton');
            console.log("new path: " + newPath);
        }

    });
}