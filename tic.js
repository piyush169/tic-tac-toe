const btns = document.querySelectorAll('.cell');

let win = false;
let xTurn = true;



console.log(btns);
btns.forEach(btn => {
  btn.addEventListener('click', function() {
    if (!win && !btn.textContent) {
      if (xTurn) {
        btn.textContent = 'X';
        xTurn = false;
      } else {
        btn.textContent = 'O';
        xTurn = true;
      }
      
      if(
        (btns[0].textContent == btns[1].textContent && btns[1].textContent === btns[2].textContent && btns[0].textContent!='') ||
        (btns[3].textContent == btns[4].textContent && btns[4].textContent === btns[5].textContent && btns[3].textContent!='') ||
        (btns[6].textContent == btns[7].textContent && btns[7].textContent === btns[8].textContent && btns[6].textContent!='') ||
        (btns[0].textContent == btns[3].textContent && btns[3].textContent === btns[6].textContent && btns[0].textContent!='') ||
        (btns[1].textContent == btns[4].textContent && btns[4].textContent === btns[7].textContent && btns[1].textContent!='') ||
        (btns[2].textContent == btns[5].textContent && btns[5].textContent === btns[8].textContent && btns[2].textContent!='') ||
        (btns[0].textContent == btns[4].textContent && btns[4].textContent === btns[8].textContent && btns[0].textContent!='') ||
        (btns[2].textContent == btns[4].textContent && btns[4].textContent === btns[6].textContent && btns[2].textContent!='')
        )  {
        win = true;
        if (xTurn) {
            let div = document.querySelector('.board'); 
            div.remove();
            let message = document.createElement('p'); 
            message.textContent = 'O wins!'; 
            message.style.color = 'purple';
            message.style.fontSize = '100px';
            message.style.textAlign = 'center';
            document.body.appendChild(message);
        }
        else {
            let div = document.querySelector('.board'); 
            div.remove();
            let message = document.createElement('p'); 
            message.textContent = 'X wins!'; 
            message.style.color = 'purple';
            message.style.fontSize = '100px';
            message.style.textAlign = 'center';
            document.body.appendChild(message);
        }
      }
    }
    if(!win && btns[0].textContent && btns[1].textContent && btns[2].textContent && btns[3].textContent && btns[4].textContent && btns[5].textContent && btns[6].textContent && btns[7].textContent && btns[8].textContent) {
        let div = document.querySelector('.board'); 
        div.remove();
        let message = document.createElement('p'); 
        message.textContent = 'It is a draw!'; 
        message.style.color = 'purple';
        message.style.fontSize = '100px';
        message.style.textAlign = 'center';
        document.body.appendChild(message);
    }
  });
});