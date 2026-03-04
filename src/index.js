
const select = document.querySelector('select')
const info = document.querySelector('p')

select.addEventListener('change', (e) => {
    switch (select.value) {
        case 'bmw':
        case 'volvo':
            getInfo(select.value)
                .then(car => {
                    info.innerHTML = `Тачка ${car.brand} ${car.model} <br>
                    Цена: ${car.price}\$`
                })
            break;
        default:
            info.innerHTML = ''
    }
})

const getInfo = async (brand) => {
    try {
        let res = await fetch(`http://localhost:4545/cars?brand:eq=${brand}`);
        return (await res.json())[0]
    } catch (error) { info.innerHTML = error.message }
}

