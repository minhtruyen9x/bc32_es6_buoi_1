const colorsRange = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']

const renderButtons = (colors = colorsRange, container = "#colorContainer") => {
    const htmls = colors.reduce((result, color, index) => {
        return result + `
            <button class="color-button ${color} ${index === 0 ? "active" : ""}"></button>
        `
    }, '')
    document.querySelector(container).innerHTML = htmls
}

const paintHouse = (value = colorsRange[0]) => {
    const house = document.querySelector("#house")
    house.className = `house ${value}`
}

paintHouse()
renderButtons()


document.querySelector("#colorContainer").onclick = (e) => {
    const targetBtn = e.target
    if (!targetBtn.classList.contains("color-button")) return

    const activeBtn = document.querySelector(".color-button.active")

    activeBtn.classList.remove("active")
    targetBtn.classList.add("active")

    const colorValue = targetBtn.classList[1]
    paintHouse(colorValue)
}
