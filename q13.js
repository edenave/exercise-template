let array = [];
let count = 0;

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here

array.push(input);
out = out + `element ${count} = ${input} \n ` ; 
count += 1;
/**/
    output.innerText = out;

}

