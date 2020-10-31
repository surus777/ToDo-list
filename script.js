addBtn.onclick = function () {
    todoList.innerHTML += "<li>" + input.value + "</li>"
  }
  const list = document.querySelector('ol');
  const input = document.querySelector('input');
  const button = document.querySelector('button');
  
  button.onclick = function () {
    let myItem = input.value;
    input.value = '';
  
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
  
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '✖️';
    list.appendChild(listItem);
  
    listBtn.onclick = function () {
      list.removeChild(listItem);
    }
  
    listItem.onclick = function () {
      listText.textContent = input.value
    }
  
    input.focus();
  }
  /*
  function createCalendar(elem, year, month) {
  
    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);
  
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
  
    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }
  
    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';
  
      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }
  
      d.setDate(d.getDate() + 1);
    }
  
    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }
  
    // закрыть таблицу
    table += '</tr></table>';
  
    elem.innerHTML = table;
  }
  
  function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }
  
  let currentTime = new Date()
  // returns the month (from 0 to 11)
  let month = currentTime.getMonth() + 1
  // returns the year (four digits)
  let year = currentTime.getFullYear()
  
  createCalendar(calendar, year, month);
  */
  