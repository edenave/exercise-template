function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    const array = JSON.parse(input);

/**/
    // write your code here

for (let i = 0 ; i < array.length; i++) {

    out = ("row ") + (i + 1) + (": ") + (array[i]);
    
    
    
}


/**/
    output.innerText = out;
}