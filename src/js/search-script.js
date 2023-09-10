// handler Date
const dateTimeButton = document.querySelector('.dateTime-menu__btn')
const dateTimeList = document.querySelector('.dateTime-menu__dateTime-list')
const dateTimeListItem = document.querySelectorAll('.dateTime-list__text')

function handlerDate() {
    dateTimeList.classList.toggle('open');
    dateTimeButton.classList.toggle('active');
    for (let i=0; i < dateTimeListItem.length; i++) {
        dateTimeListItem[i].classList.toggle('open');
    }
}

if (dateTimeButton && dateTimeList && dateTimeListItem) {
    dateTimeButton.addEventListener('click', handlerDate)
}

// handler Spec

const specButton = document.querySelector('.spec-menu__btn')
const specList = document.querySelector('.spec-menu__spec-list')
const specListItem = document.querySelectorAll('.spec-list__text')

function handlerSpec() {
    specList.classList.toggle('open');
    specButton.classList.toggle('active');
    for (let i=0; i < specListItem.length; i++) {
        specListItem[i].classList.toggle('open');
    }
}

if (specButton && specList && specListItem) {
    specButton.addEventListener('click', handlerSpec)
}


// test func Date
const inputDate = document.querySelector(".dateTime-menu__input")
const date1 = document.getElementById("date1")
const date2 = document.getElementById("date2")
const date3 = document.getElementById("date3")
const date4 = document.getElementById("date4")

function date_1 () {
    inputDate.value = date1.textContent;
    handlerDate();
}
function date_2 () {
    inputDate.value = date2.textContent
    handlerDate();
}
function date_3 () {
    inputDate.value = date3.textContent
    handlerDate();
}
function date_4 () {
    inputDate.value = date4.textContent
    handlerDate();
}

// test func spec
const inputSpec = document.querySelector(".spec-menu__input")
const spec1 = document.getElementById("spec1")
const spec2 = document.getElementById("spec2")
const spec3 = document.getElementById("spec3")
const spec4 = document.getElementById("spec4")

function spec_1 () {
    inputSpec.value = spec1.textContent;
    handlerSpec();
}
function spec_2 () {
    inputSpec.value = spec2.textContent;
    handlerSpec();
}
function spec_3 () {
    inputSpec.value = spec3.textContent;
    handlerSpec();
}
function spec_4 () {
    inputSpec.value = spec4.textContent;
    handlerSpec();
}

// test reset
const checkBoxes = document.getElementsByClassName('area-item__checkbox')

function resetFilter () {
    inputDate.value = '';
    inputSpec.value = '';

    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false
    }
}


// test hide fields
