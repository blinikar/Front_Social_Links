const dog_1 = document.getElementById("dog_1");

dog_1.addEventListener('click', fetchDog);

function fetchDog()
{
    fetch('https://random.dog/woof.json').
    then(j => j.json()).
    then(d => {
        if (d.url.includes('.mp4'))
            fetchDog()
        else
        { dog_1.innerHTML = `<img src="${d.url}"  alt ="Dog"/>` }
    })
}