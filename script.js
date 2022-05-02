let input1 = document.querySelector('#input-first');
let btn1 = document.getElementsByClassName('btn1')[0];
let btn2 = document.getElementsByClassName('btn2')[0];
let content1 = document.getElementsByClassName('content')[0];
let input2 = document.querySelector('.input2');
let btn4 = document.querySelector('.btn4');
let tasks = document.querySelector('.tasks');
// let tasks = document.getElementsByClassName('tasks')
let counterFinish = document.getElementsByClassName('counter-finish')[0];
let dev = document.querySelector('.dev')
let blockTasts = document.querySelectorAll('.nev-task')[0]

const addTask = () => {
   let val = input1.value;
   if (input1.value === '') {
      alert('Вы не ввели задачу!')
   } else {
      tasks.innerHTML += (` <div class="nev-task"><p style="display: inline">${val}</p> <span style="color: grey">Delete</span></div>`);
      input1.value = "";
      counterTotal();
      doneTask()
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
      dev.append(div)
      document.querySelector('.modal').style.display = 'none';
      document.querySelector('.modal-backdrop').classList.remove('show');
      document.querySelector('.modal-backdrop').classList.remove('fade');
      document.querySelector('.modal-backdrop').classList.add('none');

   }
}
btn4.addEventListener('click', infoDev);
const done = (event) => {
   console.log(event.target.closest('p'))
   if (event.target.closest('p') !== null) {
      event.target.classList.toggle('line-through')
   }
}
tasks.addEventListener('click', done);

const counterTotal = (e) => {
   // console.log(counterFinish.childNodes[1].childNodes[1].innerText, counterFinish.childNodes[1].childNodes[3].innerText, counterFinish.childNodes[1].childNodes[5].innerText
   // )
   let allTasks = counterFinish.childNodes[1].childNodes[1].innerText = tasks.children.length;
   // console.log(e.target)
}
const doneTask = (e) => {
   console.log(e.target.closest('line-trough'))

}
