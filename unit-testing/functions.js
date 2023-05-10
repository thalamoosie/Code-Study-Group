function addTwoPostitiveNumber(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num1 !== 'number') {
        return 0
    }

    return num1 + num2
}

function removeBackfillFromString(string) {

    if(string.includes('**BACKFILLER**')){
        string = string.replaceAll('**BACKFILLER**', '');
    }
    if(string.includes('***BACKFILLER***')){
        string = string.replaceAll('***BACKFILLER***', '');
    }
    return string
}

module.exports = {
    addTwoPostitiveNumber,
    removeBackfillFromString
};

