function generateId() {
    let idVals = [], i = 48, limit = 58, id="";
    while (i < limit) {
        idVals.push(String.fromCodePoint(i));
        if(i == 57) { i = 64; limit = 91 }
        if( i == 90) { i = 96; limit = 123 } i++;
    }
    let j = 0;
    while (j < 25) {
        id += idVals[Math.floor(Math.random() * 60)];
        j++;
    }
    return id;
}
exports.generateId = generateId;