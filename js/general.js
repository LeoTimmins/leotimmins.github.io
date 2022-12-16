function resizing(){
    headerLogo = document.getElementById("headerLogo")

    //console.log(this.window.innerHeight/this.window.innerWidth)
    if (this.window.innerHeight/this.window.innerWidth > 0.8413978494623656){
        headerLogo.style.display = "none"
    }else{
        headerLogo.style.display = "block"
    }
}

onload = resizing;
onresize = resizing;