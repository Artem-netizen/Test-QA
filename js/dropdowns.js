document.querySelectorAll('.select').forEach(function(selectDropdown) {

    let selectBtn = selectDropdown.querySelector('.select__btn')
    let selectChangeBtn = selectDropdown.querySelector('.dropdown__inner')
    let selectSubItem = document.querySelectorAll('.dropdown__item')

    selectBtn.addEventListener('click', function() {
        selectChangeBtn.classList.toggle('open')
        selectBtn.classList.toggle('open')
    })

    selectSubItem.forEach(function(listItem){
        listItem.addEventListener('click', function(e){
            e.stopPropagation()
            selectBtn.innerText = this.innerText
            selectChangeBtn.classList.remove('open')
        })
    })

    document.addEventListener('click', function(e){
        if(e.target !== selectBtn){
            selectChangeBtn.classList.remove('open')
        }
    })
})