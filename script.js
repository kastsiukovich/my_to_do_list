let input1 = document.querySelector('#input-first');
let btn1 = document.getElementsByClassName('btn1')[0];
let btn2 = document.getElementsByClassName('btn2')[0];
let content1 = document.getElementsByClassName('content')[0];
let input2 = document.querySelector('.input2');
let btn4 = document.querySelector('.btn4');

const addTask = () => {
   let val = input1.value;
   if (input1.value === '') {
      alert('Вы не ввели задачу!')
   } else {
      content1.insertAdjacentHTML('afterend', ` <div class="nev-task"><p style="display: inline">${val}</p> <span style="color: grey">Delete</span></div>`);
      input1.value = "";
   }
}
btn1.addEventListener('click', addTask);

const infoDev = () => {
   if (document.querySelectorAll('.name').lenght === 1) {
      alert('ФИО уже введено!')
   } else {
      let val2 = input2.value;
      btn2.classList.add('none');
      let div = document.createElement('div');
      div.className = 'name';
      div.innerHTML = `Разработчик: ${val2}`;
      content1.append(div)
      document.querySelector('.modal').style.display = 'none';
      document.querySelector('.modal-backdrop').classList.remove('show');
   }
}

btn4.addEventListener('click', infoDev);
