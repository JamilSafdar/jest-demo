const add = (num1, num2) => {
    return num1 + num2
}

const notNull = (num) => {
    if(typeof(num) !== null) {
        return "not null";
    } else {
        console.log("this is null");
    }   
}

let bool = (a, b) => {
    if(a == b) {
        return true;
    } else {
        return false;
    }
}


let arrFunc = (arr) => {
   if(arr.contains(char ))
}


module.exports = {
    add,
    notNull,
    bool,
    arrFunc
}