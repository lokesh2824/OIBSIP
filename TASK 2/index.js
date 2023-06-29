


function post(){

    var title = document.getElementsByName("title")[0]
    var message = document.getElementsByName("message")[0]
// console.log(title.value)
// console.log(message.value)

    if(title.value.length !=0 && message.value.length !=0){
        tasklist.innerHTML = tasklist.innerHTML + `
        <div class="virtual" >
            <input type="checkbox" class="completed form-check-input" name="complete">
            <span class="first-child" style="margin-right: 20px;">${title.value}</span>&nbsp<span class="last-child">${message.value}</span>
            <button class="edit btn btn-primary">Edit</button>
            <button class="delete btn btn-primary">Delete</button>
        </div>`
        
        let alltasks = document.querySelectorAll(".delete");
        for(i=0;i<alltasks.length;i++){
            alltasks[i].onclick = function(){
                // console.log(this.parentNode)
                this.parentNode.remove()
            }
        }

        let alledit = document.querySelectorAll(".edit")
        for(i=0; i<alledit.length; i++){
            alledit[i].onclick = function(){

                var taskContainer = this.parentNode;
                var editTitle = taskContainer.querySelector(".first-child");
                var editMessage = taskContainer.querySelector(".last-child")

                    // console.log(editTitle)
                    // console.log(editMessage)
                    // console.log(editTitle.textContent)
                    // console.log(editMessage.textContent)
                    // console.log(taskContainer)
                title.value = editTitle.textContent;
                message.value = editMessage.textContent

                taskContainer.remove()
            }
        }

        title.value = "";
        message.value = ""

        let taskCompleted = document.querySelectorAll(".completed")
        for(i=0;i<taskCompleted.length; i++){
            taskCompleted[i].onclick = function(){

                var taskContainer = this.parentNode;
                var check = taskContainer.querySelector(".completed")
                
                // console.log(check.checked)
                if(check.checked){
                    // console.log(taskContainer)
                    document.getElementById("completed").appendChild(taskContainer)
                }
            }
        }

    }else{
        alert("Please add Required fields")
    }
}

