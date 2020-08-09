document.querySelector('#myFile').addEventListener("change",function(){
    const reader = new FileReader();

    reader.addEventListener("load", () =>{
       localStorage.setItem("recent-image", reader.result);
    })

    reader.readAsDataURL(this.files[0]);
});