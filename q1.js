function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
if (JSON.parse(input)){
    if(Array.isArray(JSON.parse(input))){
        out = true;
    } else {
        out = false;
    }} else{
        out = false;
    
}

/**/
    output.innerText = out;
}