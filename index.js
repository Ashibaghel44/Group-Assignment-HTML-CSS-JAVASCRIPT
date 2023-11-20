function btn(){
    document.body.style.backgroundColor = "violet"
}
function check(){
    if (document.getElementById('docs.id').checked == true) {
        document.getElementById('pic2').innerHTML = '<img src="nature.jpg" alt="error" id="pic2" width="200px" > '
    }else {
        document.getElementById('pic2').innerHTML =''
    }

}

function lin(){
    alert("Error")

}