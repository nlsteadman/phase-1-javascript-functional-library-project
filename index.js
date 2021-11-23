const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback) {
    const newCollection = standardizeInput(collection);

    newCollection.forEach(callback);

    return collection;
}


function myMap(collection, callback) {
    const newCollection = standardizeInput(collection);

    return newCollection.map(callback);
}

function myReduce(collection, callback, acc = false) {
    let newCollection = standardizeInput(collection);

    if (acc) {
        return newCollection.reduce(callback, acc);
    }
    else {
        return newCollection.reduce(callback);
    }
}

myReduce([1, 2, 3], function(acc, val, collection) {return acc + val;}, 10);

function myFind(collection, predicate) {
    let newCollection = standardizeInput(collection);

    return newCollection.find(predicate);
}

myFind([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0;});

function myFilter(collection, predicate) {
    const newCollection = standardizeInput(collection);

    return newCollection.filter(predicate);
}

myFilter([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0;});

function mySize(collection) {
    let newCollection = standardizeInput(collection);

    return newCollection.length;
}

mySize([2, 4, 6, 8, 10]);

function myFirst(array, n = false) {
    if (n) {
        return array.slice(0, n);
    }
    else {
        return array[0];
    }
}

myFirst([5, 4, 3, 2, 1], 3);

function myLast(array, n = false) {
    if (n) {
        return array.slice(-n);
    }
    else {
        return array[array.length - 1];
    }
}

mySortBy([1, 2, 3, 4, 5, 6], function(num){return Math.sin(num)});

function myKeys(obj) {
    return Object.keys(obj);
}

function myValues(obj) {
    return Object.values(obj);
}