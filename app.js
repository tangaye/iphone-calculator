const screenEl = document.querySelector('.screen')

const handleOnClick = event =>
{
    const target = event.target
    const targetClasses = [...target.classList]

    if (targetClasses.includes('btn--switch')) toggleDarkMode()

    if (targetClasses.includes('btn--calc'))
    {
        screenEl.innerHTML += target.textContent
    }
}

const toggleDarkMode = () => document.body.classList.toggle('light')

onclick = event => handleOnClick(event)