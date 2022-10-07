// сам календарь
const currentDate = document.querySelector('.current-date'),
    days = document.querySelector('.days'),
    slideBtns = document.querySelectorAll('.calendar__head button');

//получаем текущую дату
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const month = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
]

const renderCalendar = () => {
    //получаем первый день месяца
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    //получаем последний день месяца
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    //получаем последний день предыдущего месяца
    let lastDayOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let currElem = '';

    for (let i = firstDayOfMonth; i > 0; i--) {
        currElem += `<li class="inactive">${lastDayOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let today = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? "active" : "";
        currElem += `<li class="${today}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i > 6; i++) {
        const li = document.createElement('li')
        li.classList.add('inactive')
        li.innerHTML = i - lastDayOfMonth + 1;
        li.addEventListener('click', () => {
            document.querySelector(".clr__btn").innerHTML = `${today}/${month}/${currYear}`
        })
        currElem.append(li)
    }

    currentDate.innerText = `${month[currMonth]}`;
    days.innerHTML = currElem;

    document.querySelectorAll('.clr').forEach(function() {

        let selectClrBtn = document.querySelector('.clr__btn')
        let selectCalendar = document.querySelector('.calendar')
        let selectItem = document.querySelectorAll('.days li')

        selectClrBtn.addEventListener('click', function () {
            selectCalendar.classList.toggle('open')
            selectClrBtn.classList.toggle('open')
        })

        selectItem.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                e.stopPropagation()
                let chooseMonth = '';
                switch (currentDate.innerHTML) {
                    case 'Январь':
                        chooseMonth = '01';
                        break;
                    case 'Февраль':
                        chooseMonth = '02';
                        break;
                    case 'Март':
                        chooseMonth = '03';
                        break;
                    case 'Апрель':
                        chooseMonth = '04';
                        break;
                    case 'Май':
                        chooseMonth = '05';
                        break;
                    case 'Июнь':
                        chooseMonth = '06'
                        break;
                    case 'Июль':
                        chooseMonth = '07';
                        break;
                    case 'Август':
                        chooseMonth = '08';
                        break;
                    case 'Сентябрь':
                        chooseMonth = '09';
                        break;
                    case 'Октябрь':
                        chooseMonth = '10';
                        break;
                    case 'Ноябрь':
                        chooseMonth = '11';
                        break;
                    case 'Декабрь':
                        chooseMonth = '12';
                        break;
                    default:
                        chooseMonth = '12';
                }

                let zero = "";
                switch (currentDate.innerHTML) {
                    case '1':
                        zero = '01'
                        break;
                    case '2':
                        zero = '02'
                        break;
                    case '3':
                        zero = '03'
                        break;
                    case '4':
                        zero = '04'
                        break;
                    case '5':
                        zero = '05'
                        break;
                    case '6':
                        zero = '06'
                        break;
                    case '7':
                        zero = '07'
                        break;
                    case '8':
                        zero = '08'
                        break;
                    case '9':
                        zero = '09'
                        break;
                    default:
                        zero = this.innerText;
                }

                selectClrBtn.innerText = `${zero}` + `/${chooseMonth}` + '/' + currYear
                selectCalendar.classList.remove('open')
            })
        })
    })
}

renderCalendar();

slideBtns.forEach(btns => {
    btns.addEventListener('click', () => {
        currMonth = btns.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    })
})


// const currentDate = document.querySelector('.current-date'),
//     days = document.querySelector('.days'),
//     slideBtns = document.querySelectorAll('.calendar__head button');
//
// //получаем текущую дату
// let date = new Date(),
//     currYear = date.getFullYear(),
//     currMonth = date.getMonth();
//
// const month = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь"
// ]
//
// const renderCalendar = () => {
//     //получаем первый день месяца
//     let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
//     //получаем последний день месяца
//     let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
//     let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
//     //получаем последний день предыдущего месяца
//     let lastDayOfLastMonth = new Date(currYear, currMonth, 0).getDate();
//     let currElem = '';
//
//     for (let i = firstDayOfMonth; i > 0; i--) {
//         currElem += `<li class="inactive">${lastDayOfLastMonth - i + 1}</li>`;
//     }
//
//     for (let i = 1; i <= lastDateOfMonth; i++) {
//         let today = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
//         currElem += `<li class="${today}">${i}</li>`;
//     }
//
//     for (let i = lastDayOfMonth; i > 6; i++) {
//         currElem += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
//     }
//
//     currentDate.innerText = `${month[currMonth]}`;
//     days.innerHTML = currElem;
// }
//
// renderCalendar();
//
// slideBtns.forEach(btns => {
//     btns.addEventListener('click', () => {
//         currMonth = btns.id === "prev" ? currMonth - 1 : currMonth + 1;
//         if(currMonth < 0 || currMonth > 11) {
//             date = new Date(currYear, currMonth);
//             currYear = date.getFullYear();
//             currMonth = date.getMonth();
//         } else {
//             date = new Date();
//         }
//         renderCalendar();
//     })
// })