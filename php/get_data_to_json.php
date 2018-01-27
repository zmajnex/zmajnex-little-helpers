<?php
   /* This little script is geting data from url and outputing result in json format
   Also creating individual json files in alphabetical order */

// Loop through ASCII characters until reaching 90
  
for ($i=65; $i<=90; $i++) {  
     
// store the character
 $x = chr($i);
 
 /* Get stations from srbrail and store them to file*/
 $outfile= 'zeleznicke_stanice_srbije'.$x.'.json';
 
 //Loop terms in url from a to z
 $url='http://w3.srbrail.rs/ZSRedVoznje//api/stanica/?term='.$x;   
 
 $json = file_get_contents($url);

 //Throw some msg errors   
 
 if($json) { 
  if(file_put_contents($outfile, $json, FILE_APPEND)) {
    echo "Saved JSON fetched from “{$url}” as “{$outfile}”.";
  }
  else {
    echo "Unable to save JSON to “{$outfile}”.";
  }
}
else {
 echo "Unable to fetch JSON from “{$url}”.";
 }
}