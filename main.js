// Ensimmäisen sivun scripti
if (document.title === "Kaverilista versio 1") {
    let kaverit = [];

    function aloita() {
        i = 0;
        while (i < 10) {
            // Prompt kysyy kaverin nimen ja näyttää järjestysnumeron
            let kaveri = prompt("Anna " + (i + 1) + ". kaverin nimi:");

            // Jos kaveri on null eli painetaan "Peruuta", lopetetaan silmukka
            if (kaveri === null) {
                break;
            }
            // Jos kaveri on tyhjä, näytetään virheilmoitus, koska nimi ei voi olla tyhjä
            else if (kaveri === "") {
                alert("Nimi ei voi olla tyhjä!");
            }
            // Muuten lisätään kaveri taulukkoon sekä kasvatetaan laskuria yhdellä
            else {
                kaverit.push(kaveri);
                i++;
            }
        }

        // Haetaan lista-elementti
        let listaElementti = document.getElementById("kaverilista");

        // Käydään läpi kaverit ja lisätään ne listaan
        for (let kaveri of kaverit) {
            let uusiElementti = document.createElement("li");
            uusiElementti.textContent = kaveri; // helpompi tapa kuin createTextNode
            uusiElementti.className = "list-item";
            listaElementti.appendChild(uusiElementti);
        }
    }
}


// Toisen sivun scripti
else if (document.title === "Kaverilista versio 2") {
    let kaverit = [];

    const inputKentta = document.getElementById("item");
    const listaElementti = document.getElementById("kaverilista2");
    const form = document.forms["formNewItem"];
    const poistaBtn = document.getElementById("poista");
    const jarjestaBtn = document.getElementById("jarjesta");
    const msg = document.getElementById("msg");

    // Lisätään nimi
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // estää sivun latauksen
        let nimi = inputKentta.value.trim();
        if (nimi === "") {
            msg.classList.add("error");
            msg.innerHTML = "Nimi ei voi olla tyhjä!";

            setTimeout(() => {
                msg.innerHTML = "";
                msg.classList.remove("error");
            }, 3000);
        } else {
            kaverit.push(nimi);
            paivitaLista();
            inputKentta.value = "";
        }
    });

    // Poistetaan nimi
    poistaBtn.addEventListener("click", function () {
        let nimi = inputKentta.value.trim();
        if (nimi) {
            kaverit = kaverit.filter((k) => k !== nimi);
            paivitaLista();
            inputKentta.value = "";
        }
    });

    // Järjestetään nimet
    jarjestaBtn.addEventListener("click", function () {
        kaverit.sort();
        paivitaLista();
    });

    function paivitaLista() {
        listaElementti.innerHTML = "";
        for (let kaveri of kaverit) {
            let uusiElementti = document.createElement("li");
            uusiElementti.textContent = kaveri; // vaihtoehto createTextNode. Tämä helpompi.
            uusiElementti.className = "item-list";
            listaElementti.appendChild(uusiElementti);
        }
    }
}