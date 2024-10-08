const pOutput:HTMLParagraphElement = document.querySelector('.output')
const calculate:HTMLButtonElement = document.querySelector('button')

const planetYears = {
    Mercury : 88/365,
    Venus: 225 / 365,
    Mars: 687 / 365,
    Jupiter: 4333 / 365,
    Saturn: 10756
}


// const displayAge = (clickedPlanet: string, loadedAge: number): string => {
//         if (clickedPlanet === 'Mercury') {
//             return ('Your age in Mercury years is: ' + (loadedAge / 88).toFixed(2))
//         } else if (clickedPlanet === 'Venus') {
//             return ('Your age in Venus years is: ' + (loadedAge / 225).toFixed(2))
//         } else if (clickedPlanet === 'Mars') {
//             return ('Your age in Mars Years is: ' + ((loadedAge) / 687).toFixed(2))
//         } else if (clickedPlanet === 'Jupiter') {
//             return ('Your age in Jupiter Years is: ' + ((loadedAge) / 4333).toFixed(2))
//         } else {
//             return ('Your age in Saturn years is: ' + ((loadedAge) / 10756).toFixed(2))
//         }
// }

calculate.addEventListener('click', () => {
    const selectedPlanet:HTMLInputElement = document.querySelector('[name="pickPlanet"]:checked')
    const age:HTMLInputElement = document.querySelector('#currentAge')
    let clickedPlanet: string = selectedPlanet.value
    let inputAge: number = parseInt(age.value)
    let loadedAge: number = inputAge/planetYears[clickedPlanet]
    // let outPutText: string = displayAge(clickedPlanet, loadedAge)
    let outPutText = 'You are ' + loadedAge + ' years old on ' + clickedPlanet + '.'
    pOutput.classList.add('animate')
    pOutput.innerText = outPutText
})






