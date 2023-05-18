const addBtn=document.querySelector(".addBtn");
const add=document.querySelector(".add");
const searchInput=document.querySelector(".searchInput");
const search=document.querySelector(".search");
const inputTodo=document.querySelector(".inputTodo");
const listItem=document.querySelector(".todoList .listItem");
const todoListItem=document.querySelector(".todoListCheck .listItem");
const okBtn=document.querySelectorAll(".icon-ok");
const delBtn=document.querySelectorAll(".icon-del");

const generateTemplate= todo=>{
    listItem.innerHTML+=`<li class="todoItem">
                            <span>${todo}</span>
                            <div class="iconBtn">
                                <a class="icon icon-ok"><i class="fa-solid fa-check add"></i></a>
                                <a class="icon icon-del"><i class="fa-solid fa-trash-can delete"></i></a>
                            </div>
                        </li>`;
    inputTodo.value="";   
}

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const val=inputTodo.value;
    if(val.trim()){
       generateTemplate(val);
    }
});

add.addEventListener("submit",e=>{
    e.preventDefault();
    const val=inputTodo.value;
    if(val.trim()){
       generateTemplate(val);
    }
});

listItem.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.parentElement.remove();
    }else if(e.target.classList.contains("add")){
        const todo=e.target.parentElement.parentElement.previousElementSibling; 
        
        todoListItem.innerHTML+=`<li class="todoItem">
                                    <span>${todo.innerHTML}</span>
                                    <div class="iconBtn">
                                        <a class="icon icon-del"><i class="fa-solid fa-trash-can delete"></i></a>
                                    </div>
                                </li>`;
        listItem.removeChild(e.target.parentElement.parentElement.parentElement);
    }
});

todoListItem.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.parentElement.remove();
    }
});

searchInput.addEventListener("keyup",e=>{
    e.preventDefault();
    const searchVal=search.value.trim().toLowerCase();
    filterTodos(searchVal);
});


const filterTodos=searchVal=>{
    Array.from(listItem.children).filter(s=>{
                if(!s.textContent.toLowerCase().includes(searchVal)){
                    s.classList.add("filtered");
                }else{
                    s.classList.remove("filtered");
                }
            }
        );

        Array.from(todoListItem.children).filter(s=>{
            if(!s.textContent.toLowerCase().includes(searchVal)){
                s.classList.add("filtered");
            }else{
                s.classList.remove("filtered");
            }
        }
    );
}