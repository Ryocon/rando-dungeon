const charGenBtn = document.getElementById('charBtn')
const raceEl = document.getElementById('#character')



characterGen = () => {
    fetch('https://api.open5e.com/races/')
    .then((res) => res.json())
    .then((data) => console.log(data))
}



charGenBtn.addEventListener('click', characterGen)