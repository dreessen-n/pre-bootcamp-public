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

// findMax([300,2,200,5]);




// Challenge 6: something wrong with my for loop!!
function findAve (arr) {
    var total = 0;
    for ( var i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    var avg = total / arr.length;
    return avg;
    }
 
// findAve([1, 3, 5, 7, 20])


// Challenge 7: 

 function oddNumbers() {
    var arr = [];
    for (var i = 1; i < 50;) {
        arr.push(i);
        i = i + 2;
        console.log(arr)
    }
    
    return arr;
}

// oddNumbers();

// Challenge 8:

function greaterY(arr, Y) {
    console.log(arr);
    console.log(Y);
    var countTotal = 0;
    for (var i = 0; i < arr.length;) {
        
        if (arr[i] > Y) {
            countTotal = countTotal + 1;
        }
        i = i + 1;
    }
    console.log(countTotal);
    return countTotal;
}

// greaterY([1,3,5,7], 3)

// Challenge 9 - remove all console.log()
// to submit problem

function squareVal(arr) {
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        arr[i] = arr[i]**2;
    }
    console.log(arr);
    return arr;
}

// squareVal([1,5,10,-2]);

// Challenge 10 - Negatives

function noNeg(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
    return arr;
}

// noNeg([1,5,10,-2])

// Challenge 11 - Max/Min/Avg

function maxMinAvg(arr) {
    var arrnew = [];
    var max = 0;
    var min = 0;
    var total = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i];

        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }
    avg = total / arr.length;
    
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(avg);
    
    console.log(arrnew);
    return arrnew;
}

maxMinAvg([1,5,10,-2]);