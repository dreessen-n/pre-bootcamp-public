// challenge 5:
// var max;
// function findMax(arr) {
//     var max;
//     max = Number(Math.max(arr));
//     return max;
// }

// findMax([300,2,200,5])

// console.log(max);


// Challenge 6: something wrong with my for loop!!
function findAve (arr) {
    console.log(arr)
    console.log(arr.length)
    var i = 0;
    var total = 0;
    for (i = 0; i < arr.length;) {
        total = total + arr[i];
        console.log(i);
        console.log(total);
        i += 1;
    var ave = total / arr.length;
    return ave;
    }

}
 
findAve([1, 3, 5, 7, 20])
