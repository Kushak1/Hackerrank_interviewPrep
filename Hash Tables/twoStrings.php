function twoStrings($s1, $s2) {

$s1 = array_unique(str_split($s1, 1));
$s2 = array_unique(str_split($s2, 1));

for($i = 0; $i < count($s1); $i++){
    
    if(in_array($s1[$i],$s2)){
        
        return "YES";
        
        }
    
    }
    
return "NO";
}