function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
const year = input;

    if (year % 4 === 0) {
        if (year % 100 === 0){
           if (year % 400 == 0){
              out = "Leap year.";
           } else {
              out = "Not leap year.";
           }
        } else {
           out = "Leap year.";
        }
     } else{
        out = "Not leap year.";
     }
/**/
    output.innerText = out;
}