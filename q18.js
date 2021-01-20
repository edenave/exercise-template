// function run() {
//     const input = document.getElementById("input").value;
//     const output = document.getElementById("output");
//     let out = "";
/**/
    // write your code here
let array = [1, 2, 3, 4, 5, 7, 8, 9];

function binarySearch(arr, value){
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;
    while(low <= high){
        mid = Math.floor((high + low)/2);
        if(arr[mid] === value) {
            return arr[mid];
        } else if (value > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }

    return -1;
}

let sorted = array.sort(function(a,b) {return a-b});

console.log(sorted);
let isFound = binarySearch(sorted, 3);

console.log(isFound);

/**/
//     output.innerText = out;
// }