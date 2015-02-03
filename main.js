// Number 1

var palindrome = function(string) {
    return string === string.split('').reverse().join('');
};

console.log(palindrome('a man a plan a canal panama'));
console.log(palindrome('hi ih'));
console.log(palindrome('biggib'));

// Number 2
var dashInsert = function(num) {
    var numArr = num.toString().split('');
    var finalArr = [];
    for(var i = 0; i < numArr.length; i++) {
        finalArr.push(numArr[i]);
        if(numArr[i] % 2 > 0 && numArr[i+1] % 2 > 0){
            finalArr.push('-');
        };
    };
    return finalArr.join("");
};

console.log(dashInsert(1234567));
console.log(dashInsert(131155787));
console.log(dashInsert(9704435855));

// Number 3 - Bonus
var caesarCipher = function(str, num) {
    var caesar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var testArr = str.split("");
    var finalArr = [];
    var tempLetter;
    for(var i = 0; i < testArr.length; i++) {

        if(testArr[i] === " " || testArr[i] === "." || testArr[i] === "," || testArr[i] === "!" || testArr[i] === "?" || testArr[i] === "-"){
            tempLetter = testArr[i];
            finalArr.push(tempLetter);
        }
        else if(testArr[i] === testArr[i].toUpperCase()){
            tempLetter = caesar[((caesar.indexOf(testArr[i].toLowerCase()))+num) % caesar.length].toUpperCase();
            finalArr.push(tempLetter);
        }
        else {
        tempLetter = caesar[((caesar.indexOf(testArr[i])+num) % caesar.length)];
        finalArr.push(tempLetter);
        }
    }
    return finalArr.join("");
};

console.log(caesarCipher("abc", 2));
console.log(caesarCipher("Nick Fredman", 15));