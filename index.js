 document.getElementById("button").addEventListener("click",function(){
   
        const reader = new FileReader();
    
      let value=  document.getElementById("taskid").value;
      let task = document.getElementById("task").value;
      localStorage.setItem(value+"task",task );
        reader.addEventListener("load", () =>{
           localStorage.setItem(value, reader.result);
        })
           console.log(this);
        reader.readAsDataURL(document.getElementById("myFile").files[0]);
        reader.result=null;
        document.getElementById("task").value="";
        document.getElementById("taskid").value="";
        document.getElementById("myFile").value=null;


        alert("Image has been uploaded");

        // setTimeout(function(){
        //     value= "
        // task= "";

        // },1000)
        
    
    

 })

