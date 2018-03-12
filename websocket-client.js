const WS = new WebSocket('ws://localhost:3000');

WS.onmessage = (payload)=>{
    console.log(payload.data);
    displayMsgs(payload.data);
};
WS.onopen = ()=>{
    displayTitle('connection open');
};
WS.onclose = ()=>{
    displayTitle('connection closed');
};
function displayTitle(title){
    document.querySelector('h2').innerHTML = title;
}
function displayMsgs(message){
    let p = document.createElement('p');
    p.innerHTML = message;
    document.querySelector('div.messages').appendChild(p);
}
document.forms[0].onsubmit = ()=>{
    let input = document.getElementById('message');
    console.log(input);
    WS.send(input.value);
};
