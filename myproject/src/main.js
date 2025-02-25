import './style.css'
import {createElement} from "./utils/createEl.js";
const app=document.getElementById('app')
const boardList=Array.from({length:100})
const boardList2=Array.from({length:100})
const gameBoard_1=createElement({elem:'div',className:'game-board'});
const gameBoard_2=createElement({elem:'div',className:'game-board'});
boardList.forEach(()=>{const item=createElement({elem:'div',className:'game-item'})
    gameBoard_1.appendChild(item)})
boardList2.forEach(()=>{const item=createElement({elem:'div',className:'game-item'})
    gameBoard_2.appendChild(item)})
app.appendChild(gameBoard_1)
app.appendChild(gameBoard_2)




















const elem=createElement({elem:'div',className:'dd',atr:{name:'draggable',type:'true'}})



let dragged = null; // перемещенные данные
// источник перемещения

// в обработчике устанавливаем ссылку на перетаскиваемый элемент
elem.addEventListener("dragstart", (e) => dragged = e.target);

// целевая область перемещения

// предупреждаем событие drop
gameBoard_1.addEventListener("dragover", (e) => e.preventDefault());
// копируем перетаскиваемый элемент и помещаем его копию на целевую область
gameBoard_1.addEventListener("drop", (e) => e.target.appendChild(dragged.cloneNode()));
app.appendChild(elem)