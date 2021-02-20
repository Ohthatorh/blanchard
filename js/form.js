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
    }
})