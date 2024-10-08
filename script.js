var pOutput = document.querySelector('.output');
var calculate = document.querySelector('button');
var planetYears = {
    Mercury: 88 / 365,
    Venus: 225 / 365,
    Mars: 687 / 365,
    Jupiter: 4333 / 365,
    Saturn: 10756
};
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
calculate.addEventListener('click', function () {
    var selectedPlanet = document.querySelector('[name="pickPlanet"]:checked');
    var age = document.querySelector('#currentAge');
    var clickedPlanet = selectedPlanet.value;
    var inputAge = parseInt(age.value);
    var loadedAge = inputAge / planetYears[clickedPlanet];
    // let outPutText: string = displayAge(clickedPlanet, loadedAge)
    var outPutText = 'You are ' + loadedAge + ' years old on ' + clickedPlanet + '.';
    pOutput.classList.add('animate');
    pOutput.innerText = outPutText;
});
