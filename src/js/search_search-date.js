const dateTimeButton = document.querySelector('.dateTime-menu__btn')
const dateTimeList = document.querySelector('.dateTime-menu__dateTime-list')
const dateTimeListItem = document.querySelectorAll('.dateTime-list__text')

dateTimeButton.addEventListener('click', function () {
    dateTimeButton.classList.toggle('active')
    dateTimeList.classList.toggle('open')
    var i
    for (i=0; i < dateTimeListItem.length; i++) {
        dateTimeListItem[i].classList.toggle('open')
    }

})