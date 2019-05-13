const submit = document.querySelector("#submit");

function paintTip(text) {
    const result = document.querySelector("span");
    result.innerText = text;
}

function handleSubmit(event) {
    const bill = document.querySelector("#bill").value,
    service = document.querySelector("#service").value,
    people = document.querySelector("#people").value;

    event.preventDefault();
    const yourTip = (bill * service) / people;

    console.log(yourTip);
    paintTip(yourTip);
}

function init() {
    submit.addEventListener("submit", handleSubmit);
}

init();
