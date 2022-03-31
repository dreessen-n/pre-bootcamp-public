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
    var total = 0;
    for ( var i = 0; i < arr.length; i++) {
        total = total + arr[i];
        console.log(arr[i]);
        console.log(i);
        console.log(total);
    }
    var ave = total / arr.length;
    return ave;
    }
 
findAve([1, 3, 5, 7, 20])
