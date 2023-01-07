function f() {
    let amount=1*document.getElementById("amount").value;
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    let result ;


    if (from=="VND"&&to=="USD"){
        result=  (amount * 23000) + "$" ;
    }
    else if (from=="USD"&&to=="VND"){
        result=  (amount / 23000) + "VND";
    }
    else if (from=="VND"&&to=="VND"){
        result=  amount + "VND";
    }
    else  {
        result= "$" + amount;
    }

    document.getElementById('result').innerText= 'result: ' + result;


}