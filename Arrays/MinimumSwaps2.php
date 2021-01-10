function minimumSwaps($arr) {
    
$swaps = 0;

for($i=0;$i<count($arr)-1;$i++){
        
        $current = $arr[$i];
        $pos = $arr[$current-1];
        while($current!==$pos){
          
        $arr[$i] = $pos;
        $arr[$current-1] = $current;
        $current = $pos;
        $pos=$arr[$current-1];
        $swaps++;
                
        }  
          
}


return($swaps);

}
