exports.quadrat = (a, b, c) => {
    if(a == 0)
        return false;
    var res = {};
    var D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res['discriminant'] = D;
    if(D == 0)
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        var mas = [];
        mas.push((-b + Math.sqrt(D)) / (2 * a));
        mas.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = mas;
    }
    return res;
}
