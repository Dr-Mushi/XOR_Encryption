function clicked(){
    var key = Math.floor(Math.random()* 30) + 1;
    var input = document.getElementById('txtIn').value;
    console.log(input)
    
    document.getElementById('encText').textContent = input
    var cip = crypt(input,key);
    document.getElementById('enc').textContent = cip.join("");
    var dec = crypt(cip,key)
    document.getElementById('dec').textContent = dec.join("");
    
}


function crypt(str,key) {
    var cipher = [];
    for (var i = 0; i < str.length; i++) {
        console.log((1 + i) + "-" + str[i])
        var temp = str[i].charCodeAt(0) ^ key
        cipher.push(String.fromCharCode(temp))

    }
    console.log(cipher)
    return cipher;

}