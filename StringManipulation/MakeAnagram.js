function makeAnagram(a, b) {
    a = a.split("")
    b = b.split("")
    let less;
    let more;

    if(a.length > b.length){
        more = a;
        less = b;}
    else{
        more = b;
        less = a;}

    for(let i = 0; i < less.length; i++){
        for(let j = 0; j < more.length; j++){
            if(less[i] === more[j]){
                less.splice(i,1);
                more.splice(j,1);
                i--;

            }
        }
    }

    let all = less.length+more.length;

    return all;
}