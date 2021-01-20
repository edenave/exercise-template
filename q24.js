function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
}
/**/
    // write your code here
let arr = [12, 44, "DAD", 32 , 0, false, NaN, undefined];
let newArr;


for (let i = 0 ; i < arr.length ; ++i) {

    if (arr[i] == 0 || Number.isNaN(arr[i]) || arr[i] == null || arr[i] == false || arr[i] == "" || arr[i] == undefined) {

       arr.splice(i, 1);
       i--;



        
    } else {
        newArr = arr;
        
    }

    console.log(arr);

/**/
//     output.innerText = out;
}
