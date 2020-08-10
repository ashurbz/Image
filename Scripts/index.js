
    
// adding click function on submit
 document.getElementById("button").addEventListener("click",function(){
   
        const reader = new FileReader();
    
      let value=  document.getElementById("taskid").value;
      let task = document.getElementById("task").value;
      // fields cant be empty, sop creating a alert
        if(value=="" || task == ""){
            return alert("Fill Required Details")
        }
// setting value in localStorage, to view later
      localStorage.setItem(value+"task",task );
        reader.addEventListener("load", () =>{
           localStorage.setItem(value, reader.result);
        })
           console.log(this);
        reader.readAsDataURL(document.getElementById("myFile").files[0]);
        reader.result=null;
        let taskList=document.getElementById("taskList");
        let abc =document.createElement("li")
        abc.innerText=value;
          taskList.appendChild(abc);
          // creating alert as task created

        alert("Task Created :"+value);
        document.getElementById("task").value="";
        document.getElementById("taskid").value="";
        document.getElementById("myFile").value=null;
        
    

 })
let taskList=document.getElementById("taskList");

// iterating over localStorage and fetching image and taskID from there to work upon
    for(let i =0; i<localStorage.length;i++) {
        if(localStorage.key(i).endsWith("k")){
    let task =document.createElement("li")
      task.innerText=localStorage.key(i).replace("task","")
        taskList.appendChild(task);}
        
    }





