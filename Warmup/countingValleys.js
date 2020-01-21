function countingValleys(n, s) {
    let seaLevel = 0;
    let valley = 0;
    s = s.split("");

    for( let i=0 ;i <= n; i++ ){
        if( s[i] ==="D" ){
            seaLevel--;
        }else if( s[i] === "U" ){
            seaLevel++;
            if( ++seaLevel ===0 ){
                valley++;
            }
        }
    }
    
    return valley++;
}