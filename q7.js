function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    const array = JSON.parse(input);
/**/
    // write your code here
array.sort((a, b) => a - b);
out = array;
/**/
    output.innerText = out;
}