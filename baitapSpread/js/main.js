const transformTextEl = (textEl) => {
    const string = textEl.innerText

    textEl.innerHTML = [...string]
        .map(character => {
            return `<span>${character}</span>`
        })
        .join("")
}

transformTextEl(document.querySelector(".heading"))
