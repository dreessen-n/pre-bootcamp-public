// challenge 5:
function findMax(arr) {
    var max = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            
        }
    }

    console.log(max);
    return max;
}

findMax([300,2,200,5]);




// Challenge 6: something wrong with my for loop!!
// function findAve (arr) {
//     var total = 0;
//     for ( var i = 0; i < arr.length; i++) {
//         total = total + arr[i];
//     }
//     var avg = total / arr.length;
//     return avg;
//     }
 
// findAve([1, 3, 5, 7, 20])
