const dateInput=document.getElementById('date');
dateInput.min=new Date().toLocaleDateString('fr-ca');
const form2=document.getElementById('form2');
const deleteButton=document.getElementById('delete-button');
deleteButton.addEventListener('click',function(){
    form2.submit();
})