const calcPoint = (...rest) => {
    return rest.reduce((result, point) => result + point) / rest.length
}

const handleCalculate = (outputID, ...inputsID) => {

    const values = inputsID.map(inputID => {
        const elementValue = document.querySelector(inputID).value

        if (!elementValue) return NaN
        return +elementValue
    })

    document.querySelector(outputID).innerText = calcPoint(...values).toFixed(2)
}

document.querySelector("#btnKhoi2").onclick = () => {
    handleCalculate("#tbKhoi2", "#inpVan", "#inpSu", "#inpDia", "#inpEnglish")
}

document.querySelector("#btnKhoi1").onclick = () => {
    handleCalculate("#tbKhoi1", "#inpToan", "#inpLy", "#inpHoa")
}