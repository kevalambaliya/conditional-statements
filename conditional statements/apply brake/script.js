function test(){
    let d = parseInt(document.getElementById('num1').value);
    let t = parseInt(document.getElementById('num2').value);
    let speed = d/t;
    let msg;

    if(speed  > 40){
        msg = "Brake";
    }
    else{
        msg = "Keep Going";
    }
    document.getElementById('dis').innerHTML = msg;
}