
function main() {
    
    // max
    function max(param1, param2) {
        if (param1 < param2) {
            return param2;
        } else {
            return param1;
        }
    }
    
    var highest1 = max(2, 4);
    console.log(highest1);
    outputLine(highest1);
    
    var highest2 = max(7, 6);
    console.log(highest2);
    outputLine(highest2);
    
    // maxOfThree
    function maxOfThree(param1, param2, param3) {
        if (param1 > param2 && param1 > param3) {
            return param1;
        } else if (param2 > param1 && param2 > param3) {
            return param2;
        } else {
            return param3;
        }
    }
    
    var highest3 = maxOfThree(73, 33, 91);
    console.log(highest3);
    outputLine(highest3);
    
    var highest4 = maxOfThree(1, 3, 2);
    console.log(highest4);
    outputLine(highest4);
    
    // isVowel
    function isVowel(character) {        
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        
        for (i = 0; i < vowels.length; i++) { 

            var currentVowel = vowels[i];
            
            if (character == currentVowel) {
                return true;
            }
        }
        
        return false;
    }
    
    var isItAVowel = isVowel('a');
    console.log(isItAVowel);
    outputLine(isItAVowel);
    
    var isItAVowel = isVowel('c');
    console.log(isItAVowel);
    outputLine(isItAVowel);
    
    var isItAVowel = isVowel('n');
    console.log(isItAVowel);
    outputLine(isItAVowel);
    
    
    // Homework #1 - sumNumbers
    // this function should sum all the values contained in the parameter 'numbers'
    // note that the 'numbers' parameter is a variable of type Array
    function sumNumbers(numbers) {
        
        
    }
    
    var sum1 = sumNumbers([1, 2, 3, 4]);
    console.log(sum1); // should equal 10
    outputLine(sum1);
    
    var sum1 = sumNumbers([3, 3, 4, 5]);
    console.log(sum1); // should equal 15
    outputLine(sum1);
    
    
    // Homework #2 - reverse
    // this function should reverse the characters which are contained in the parameter 'phrase'
    // note that the 'phrase' parameter is of type String
    function reverse(phrase) {
        
        // HINT: this converts a String such as 'hello' into the Array ['h', 'e', 'l', 'l', 'o'];
        var characters = phrase.split('');
        
        
    }
    
    var reversedCharacters = reverse('abcdef');
    console.log(reversedCharacters); // should equal 'fedcba'
    outputLine(reversedCharacters);
    
    var reversedNumbers = reverse('javascript');
    console.log(reversedNumbers);  // should equal 'tpircsavaj'
    outputLine(reversedNumbers);
    
    
    // Homework #3 - everySecondLetter
    // this function should return an Array containing every second letter contained in the 'phrase' parameter
    function everySecondLetter(phrase) {
        
                
    }
    
    var secondLetters = everySecondLetter('letterbox');
    console.log(secondLetters);  // should equal ['e', 't', 'r', 'o']
    outputLine(secondLetters);
    
    var secondLetters = everySecondLetter('yoyo');
    console.log(secondLetters);  // should equal ['o', 'o']
    outputLine(secondLetters);
        
        
}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}