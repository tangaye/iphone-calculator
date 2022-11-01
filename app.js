
const handleOnClick = event =>
{
    const target = event.target
    const targetClasses = [...target.classList]

    if (targetClasses.includes('btn--switch')) toggleDarkMode()
}

const toggleDarkMode = () => document.body.classList.toggle('light')

onclick = event => handleOnClick(event)