function more(){
    let more = document.querySelectorAll('.more');
    for(let i = 0; i < more.length; i++){
        more[i].addEventListener('click', function(){
            more[i].parentNode.classList.toggle('active')
        })
    }
}

function more2(){
    let more2 = document.querySelectorAll('.more2');
    for(let i = 0; i < more2.length; i++){
    more2[i].addEventListener('click', function(){
        more2[i].parentNode.classList.toggle('active')
    })
}
}

function more3(){
    let more3 = document.querySelectorAll('.more3');
for(let i = 0; i < more3.length; i++){
    more3[i].addEventListener('click', function(){
        more3[i].parentNode.classList.toggle('active')
    })
}
}

function more4(){
    let more4 = document.querySelectorAll('.more4');
for(let i = 0; i < more4.length; i++){
    more4[i].addEventListener('click', function(){
        more4[i].parentNode.classList.toggle('active')
    })
}
}


function submitFunction(){
    var txt;
    if(confirm("Thanks for your feedback!")){
        txt = 'OK';
    } else {
        txt = 'Cancel';
    }
    document.getElementById("contact_form").submit();
}

function resetFunction(){
    document.getElementById("contact_form").reset();
}

