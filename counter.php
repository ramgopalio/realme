<?php
  $file = 'counter.txt';

  // Read the current hit count from the file
  $count = (file_exists($file)) ? (int) file_get_contents($file) : 0;

  // Increment the hit count
  $count++;

  // Save the updated hit count to the file
  file_put_contents($file, $count);

  // Output the hit count
  echo $count;
?>
