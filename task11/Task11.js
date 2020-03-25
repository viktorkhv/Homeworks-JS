//Задание 1
function filterNumbersArr(numbers) {
    var newArr = [];
    numbers.forEach(function (el, i, numbers) {
        if (el > 0) {
            newArr[newArr.length] = el;
        }
    })
    return newArr;
}
filterNumbersArr([-1, 0, 2, 34, -2]);
//Задание 2
function posNumber(arr) {
    var newArr = arr.find(function (number) {
        return number > 0;
    })
    console.log(newArr);
}
posNumber([-1, 0, 2, 34, -2]);
//Задание 3
function isPalindrome(str) {
    str = str.toLowerCase();
    strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return true;
    } else {
        return false;
    };
}
isPalindrome('шалаШ');
isPalindrome('привет');
//Задание 4
function areAnagrams(word1, word2) {
    if (word1.length != word2.length) {
        return false
    };
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    var arr1 = word1.split('').sort().join();
    var arr2 = word2.split('').sort().join();
    if (arr1 == arr2) {
        return true;
    } else {
        return false;
    }
}
areAnagrams('кот', 'отк');
//Задание 5
function divideArr(arr, divNumber) {
    var newArr = [];
    for (i = 0; i < arr.length; i += divNumber) {
        newArr.push(arr.slice(i, i + divNumber));
    }
    console.log(newArr);
}
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);