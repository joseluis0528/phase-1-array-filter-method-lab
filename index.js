// Code your solution here

function findMatching(array, string) {
    return array.filter(match => match.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(array, string) {
    return array.filter(match => match.charAt() === string.charAt());
}

function matchName(array, string) {
    return array.filter(match => match.name === string);
}