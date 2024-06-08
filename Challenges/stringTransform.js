function stringTransform(thestring) {
    const len = thestring.length;

    if (len % 15 === 0) {
        // Here we do both operations, we revesre the string and then replace each character with its ASCII code
        return thestring.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 5 === 0) {
        // Here I replace all the characters with their ASCII code
        return thestring.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 3 === 0) {
        // Here I just revesre  the entire string
        return thestring.split('').reverse().join('');
    } else {
        // If none of the conditions are met then I return the original string
        return thestring;
    }
}

console.log(stringTransform("Nzanzu"));