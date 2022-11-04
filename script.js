function criaPartida(selecao_1, hora, selecao_2) {
    return `
    <li>
        <img src="./assets/flags/${selecao_1}.svg" alt="Bandeira do(a) ${selecao_1}">
        <strong>${hora}</strong>
        <img src="./assets/flags/${selecao_2}.svg" alt="Bandeira do(a) ${selecao_2}">
    </li>
    `
}

let delay = -0.3

function criaCard(data, dia, partidas) {
    delay = delay + 0.3
    return `
    <div class="card" style="animation-delay:${delay}s">
        <h2>${data} <span>${dia}</span></h2>

        <ul>
            ${partidas}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
criaCard("24/11", "quinta", criaPartida("brazil", "16:00", "serbia")) +
criaCard("28/11", "segunda", criaPartida("brazil", "13:00", "switzerland") + criaPartida("portugal", "16:00", "uruguay")) +
criaCard("02/12", "sexta", criaPartida("brazil", "16:00", "cameroon"))