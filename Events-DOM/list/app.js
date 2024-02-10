
const people = [new Person("John","Morales"),
new Person("Gissela","Serrano")];

function showPeopleList(){
    let text = '';
    for(let person of people){
        text += `<li> ${person.name} ${person.lastname} </li>`;
    }
    document.getElementById('list').innerHTML = text;
}

function addPerson(){
    const form = document.forms['form'];
    let name = form.name.value;
    let lastname = form.lastname.value;
    if((name != '' && isNaN(name) )  && (lastname != '' && isNaN(lastname))){
        people.push(new Person(name, lastname));
        showPeopleList();
        form.name.value = '';
        form.lastname.value = '';
        document.getElementById('message').innerHTML = "";
    }
    else{
        document.getElementById('message').innerHTML = "You must fill out the fields with text.";
    }
}