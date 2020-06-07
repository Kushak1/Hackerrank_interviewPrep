function checkMagazine(magazine, note) {
    for( let i = 0; i < note.length; i++){
        if( magazine.includes(note[i]) !== true){
            console.log("No");
            return;
        }else{
            magazine.splice(magazine.indexOf(note[i]), 1);
        }
    }

    console.log("Yes");
}