let content = [];
let date = [];
let i = 0;

function scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
}

function rightsend() {
    let textInput = document.getElementById('textInput');
    let time = new Date();

    if (textInput.value == '')
        alert("You can't send empty message");
    else {
        document.body.innerHTML += `<div class="messageRight"> <span id="content${i + 1}"></span> <p id="date${i + 1}"></p> </div>`;
        content[i] = document.getElementById(`content${i + 1}`);
        date[i] = document.getElementById(`date${i + 1}`);
        content[i].innerText = textInput.value;
        date[i].innerText = time.getHours() + ":" + time.getMinutes();
        date[i].style.right = '14px';
        scrollDown();
        i++;
    }
}

function leftsend() {
    let textInput = document.getElementById('textInput');
    let time = new Date();

    if (textInput.value == '')
        alert("You can't send empty message");
    else {
        document.body.innerHTML += `<div class="messageLeft"> <span id="content${i + 1}"></span> <p id="date${i + 1}"></p> </div>`;
        content[i] = document.getElementById(`content${i + 1}`);
        date[i] = document.getElementById(`date${i + 1}`);
        content[i].innerText = textInput.value;
        date[i].innerText = time.getHours() + ":" + time.getMinutes();
        date[i].style.left = '14px';
        scrollDown();
        i++;
    }
}

