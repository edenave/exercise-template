function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
}
// /**/

    // write your code here
    function getDuplicated(arr = []){
        let arrSort = arr.slice().sort();
        const results = [];
        for (var i = 0; i < arrSort.length - 1; i++) {
            if (arrSort[i + 1] === arrSort[i]) {
                results.push(arrSort[i]);
            }
        }
        return results;
    }

    console.log(getDuplicated())
/**/
    // output.innerText = out;
      


