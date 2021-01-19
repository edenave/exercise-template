function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    const array = JSON.parse(input);
/**/
    // write your code here

let arrDash = [array[0]];

for(let i = 1 ; i < array.length ; i++) {
    if ((array[i-1] % 2 === 0)&& (array[i] % 2 ===0)){
        arrDash.push('-', array[i]);
    } else {
        arrDash.push(array[i]);
    }
}
out = arrDash;
/**/
    output.innerText = out;
}