document.getElementById('nappi1').addEventListener('click', tekstinhaku);


function tekstinhaku(){
    // haetaan tieto urlista
    fetch('https://baconipsum.com/api/?type=meat-and-filler')
    //vastaus muutetaan json muotoon
    .then(response => response.json())
    //tiedot consoleen
    .then(data => console.log(data));
    }

let kissa = document.getElementById("kissa");
let kissanappi = document.getElementById("kissanappi");

kissanappi.addEventListener('click', getcat)

function getcat() {
    //haetaan kissakuva
    fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => {
        //haetaan tiedosto
        kissa.innerHTML = `<img src="${data.file}"/>`
    })
}



    


