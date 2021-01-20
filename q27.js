// function run() {
//     const input = document.getElementById("input").value;
//     const output = document.getElementById("output");
//     let out = "";

/**/
    // write your code here
    let arr =    [{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    function propertyVal(arr1, arrProperty) {
        let newArray = [];
        for ( let i = 0; i < arr1.length ; ++i )
            newArray.push( arr1[ i ][ arrProperty ] );
        return newArray;
    }
    
    let result = propertyVal(arr, "insert property here");

    console.log(propertyVal(arr, "insert property here"))
    
// out = result;
    
    // output.innerText = out;
// }