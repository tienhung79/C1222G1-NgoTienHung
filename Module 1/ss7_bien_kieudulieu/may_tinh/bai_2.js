function display(value) {
    document.getElementById('result').value+=value;
}
function xoa() {
    document.getElementById('result').value='';
}
function bang() {
    let a=document.getElementById('result').value;
    let b=eval(a);
        document.getElementById('result').value=b;
}