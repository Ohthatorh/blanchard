const selectorEl = document.getElementsByName('tel');
const im = new Inputmask('+7 (999)-999-99-99');
im.mask(selectorEl);
new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20
        },
        
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selectorEl[0].inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },

        tooltip: {
            fadeOutClass: '.hide' 
        }
    },
    messages: {
        name: {
            required: 'Поле "Имя" обязательно для заполнения',
            minLength: 'Поле "Имя" введено некорректно, минимум 2 знака',
            maxLength: 'Поле "Имя" введено некорректно, максимум 20 знаков'
        },
        tel: {
            required: 'Поле "Телефон" обязательно для заполнения',
            function: 'Заполните поле "Телефон" до конца'
        }
    },
    submitHandler: function(form) {
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const textSuccess = document.querySelector('.contacts__left-column-text');
                    const form = document.querySelector('.contacts__form');
                    textSuccess.textContent = 'Отправлено!';
                    textSuccess.classList.add('success');
                    form.remove();
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        form.reset();
    }
})