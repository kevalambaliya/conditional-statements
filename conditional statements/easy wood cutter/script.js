function wood(){
    let a = parseInt(document.getElementById('num').value);
    let msg;

    if( a % 3 == 0){
        msg = "Yes";
    }
    else{
        msg = "No";
    }
    document.getElementById("res").innerHTML = msg;
}