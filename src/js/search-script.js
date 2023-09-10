const dateTimeButton = document.querySelector('.dateTime-menu__btn')
const dateTimeList = document.querySelector('.dateTime-menu__dateTime-list')
const dateTimeListItem = document.querySelectorAll('.dateTime-list__text')



// if (dateTimeButton && dateTimeList && dateTimeListItem) {
//     dateTimeButton.addEventListener('click', function handlerDate() {
//         dateTimeList.classList.toggle('open');
//         dateTimeButton.classList.toggle('active');
//         for (let i=0; i < dateTimeListItem.length; i++) {
//             dateTimeListItem[i].classList.toggle('open');
//         }
//     })
// }



function Date() {
    dateTimeList.classList.toggle('open');
    dateTimeButton.classList.toggle('active');
    for (let i=0; i < dateTimeListItem.length; i++) {
        dateTimeListItem[i].classList.toggle('open');
    }
}

if (dateTimeButton && dateTimeList && dateTimeListItem) {
    dateTimeButton.addEventListener('click', Date)
}