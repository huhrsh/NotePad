const dateInput=document.getElementById('date');
const form1=document.getElementById('form1');
const form2=document.getElementById('form2');
const addButton=document.getElementById('add-button');
const deleteButton=document.getElementById('delete-button');
const buttons=document.getElementsByTagName('button');
const taskList=document.getElementsByClassName('tasks-todo');
const textInput=document.getElementById('text-input');
const taskContainers=document.getElementsByClassName('task-container');
const colors={'Idle':'#ffffff', 'Personal':'#ff595e','Work':'#ffca3a','Home':'#8ac926','Chores':'#ff8fab','Others':'#9381ff'};
const listCategory=document.getElementsByClassName('list-category');

for(let i of listCategory){
    i.style.backgroundColor=colors[i.innerText];
}

dateInput.min=new Date().toLocaleDateString('fr-ca');

deleteButton.addEventListener('click',function(){
    deleteButton.classList.remove('animate__pulse');
    deleteButton.classList.remove('animate__infinite');
    // let tempBool=false;
    for(let i of taskList){
        if(i.checked){
            deleteButton.classList.add('animate__tada');
            setTimeout(function(){
                form2.submit();
                deleteButton.classList.remove('animte__tada');
            },1000);
            return;
        }
    }
    deleteButton.classList.add('animate__headShake');
    setTimeout(function(){
        deleteButton.classList.remove('animate__headShake');
        window.alert("No tasks selected");
    },500);

});

addButton.addEventListener('click',function(e){
    addButton.classList.remove('animate__pulse');
    addButton.classList.remove('animate__infinite');
    e.preventDefault();
    if(textInput.value==""){
        setTimeout(function(){
            alert("Write task description");
        },500);
        addButton.classList.add('animate__headShake');
    }
    else{
        addButton.classList.add('animate__tada');
        setTimeout(function(){
            form1.submit();
        },1000);
    }
});

addButton.addEventListener('animationend',function(){
    addButton.classList.remove('animate__headShake');
    addButton.classList.remove('animate__tada');
})

for(let i of buttons){
    i.onmouseover=function(){
        i.classList.add('animate__pulse');
        i.classList.add('animate__infinite')
    }
    i.onmouseleave=function(){
        i.classList.remove('animate__pulse');
        i.classList.remove('animate__infinite')

    }
}
