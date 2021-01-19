function run() {
    const input = document.getElementById("input").value;
    const inputn = document.getElementById("n").value;
    const output = document.getElementById("output");
    let out = "";
    const array = JSON.parse(input);
/**/
    // write your code here
    let temp = [];
for( let i = 0 ; i < inputn ; i++) {
    temp.push(array[i]);

}
out = temp

/**/
    output.innerText = out;
}