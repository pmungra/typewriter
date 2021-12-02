const sentence = "hello there from lighthouse labs";

// add each letter of string in new line in no time

/*
for (const char of sentence) {
  console.log(char);
}
*/

//Adding process.stdout.write
/*
for (const char of sentence) {
  process.stdout.write(char);
}

*/
// Delaying The Display With setTimeout
let start = 0;
for (const char of sentence) {
  
  setTimeout(() => {
    
    process.stdout.write(char + "\n");
  }, start); 
    start += 50;
}