

function gcd(x , y){
    
    if(y === 0) return x
    const remainder = x%y
    return gcd(y,remainder)
}

console.log(gcd(2 , 4))