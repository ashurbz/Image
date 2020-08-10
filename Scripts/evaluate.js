
// adding click function for whole, by clicking the search button this function executes
document.getElementById("search").addEventListener("click" , function(){
    document.getElementById("taskList").innerHTML=""
    let value = document.getElementById("input-search").value;
    if(value==""){
        return alert("Cant be empty");
    }
    let taskList=document.getElementById("taskList");
    var count =0;


    // iterating in loop for seeing the keys in localStorage stored already 
    for(let i =0; i<localStorage.length;i++) {
        if(localStorage.key(i).endsWith("k")){
  
      
      if(localStorage.key(i).search(value)>=0){
          count++;
// Creating a list to show images
        let task =document.createElement("li")
        // creating a image tag
       let image= document.createElement("img")
       image.id ='image'+localStorage.key(i).replace("task","")
        
        task.innerText= localStorage.getItem(localStorage.key(i));
        task.appendChild(image)

        taskList.appendChild(task);
        // showing marks that are evaluated
        let marks = document.createElement("input")
        marks.type= "number";
        marks.placeholder= "Marks Out Of 10"
        marks.id ='marks'+localStorage.key(i).replace("task","")  
        task.appendChild(marks);
        let button = document.createElement("button");
      
        button.innerText = "Submit";
        task.appendChild(button)
    
        button.onclick=function(){ 
            
// if marks value is not under the bracket throwing an alert for the same
            let marksValue = document.getElementById('marks'+localStorage.key(i).replace("task","") ).value
            if(marksValue<0 || marksValue>10 || marksValue =="" ){
                return alert("Marks Cannot Be Less Than 0 or Greater Than 10 ")
            }

// Saving marks in localStorage
            localStorage.setItem(localStorage.key(i)," Marks = "+marksValue+ " Evaluated");

            document.getElementById("search").click()
            
            
            
            
            
            
            
            
            alert("Marks Evaluated For Task Id "+(localStorage.key(i).replace("task","")))}
       
        var dataImage = localStorage.getItem(localStorage.key(i).replace("task",""));
        bannerImg = document.getElementById('image'+localStorage.key(i).replace("task",""));
        bannerImg.src =  dataImage;
      }

    
        
      
        }
    }



if(count==0){
    return alert("No task found With That Id")
    document.getElementById("counter").innerText = "No Result Found"
}
else{
    document.getElementById("counter").innerText = count+" Result Found "
}

})