function createGame(player1,hour,player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="bandeira do ${player2}">

    </li>
    
    `

}

let delay = -0.4;
function createCard(date, day, games) {
   delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
        
            </ul>

    </div>
    
    `
}
document.querySelector('#cards').innerHTML = 
    createCard('20/11','domingo', createGame("qatar","13:00","equador")) +

    createCard('21/11','segunda',createGame("inglaterra","10:00","iran") + createGame("senegal","13:00","paisesbaixos") + createGame("united states","16:00","wales") ) +

    createCard('22/11','terça',createGame("argentina","07:00","saudi arabia") + createGame("denmark","10:00","tunisia") + createGame("mexico","13:00","poland") + createGame("france","16:00","australia") ) +

    createCard('23/11','quarta',createGame("morocco","07:00","croatia") + createGame("germany","10:00","japan") + createGame("spain","13:00","costa rica") + createGame("belgium","16:00","canada") ) +

    createCard('24/11','quinta', createGame("suica","07:00","camaroes") + createGame("uruguai","10:00","coreia") + createGame("portugal","13:00","gana") + createGame("brazil","16:00","serbia")) +
  
    createCard('25/11','sexta', createGame("wales","07:00","iran") + createGame("qatar","10:00","senegal") + createGame("paisesbaixos","13:00","equador") + createGame("inglaterra","16:00","united states")) +
    
    createCard('26/11','sábado', createGame("tunisia","07:00","australia") + createGame("poland","10:00","saudi arabia") + createGame("france","13:00","denmark") + createGame("argentina","16:00","mexico")) +

    createCard('27/11','domingo', createGame("japan","07:00","costa rica") + createGame("belgium","10:00","morocco") + createGame("croatia","13:00","canada") + createGame("spain","16:00","germany")) +

    createCard('28/11','segunda',createGame("camaroes","07:00","serbia") + createGame("coreia","10:00","gana") + createGame("brazil","13:00","suica") + createGame("portugal","16:00","uruguai")) +
    
    createCard('29/11','terça', createGame("equador","12:00","senegal") + createGame("paisesbaixos","12:00","qatar") + createGame("wales","16:00","inglaterra") + createGame("iran","16:00","united states")) +

    createCard('30/11','quarta', createGame("australia","12:00","denmark") + createGame("tunisia","12:00","france") + createGame("saudi arabia","16:00","mexico") + createGame("poland","16:00","argentina")) +

    createCard('01/12','quinta', createGame("canada","12:00","morocco") + createGame("croatia","12:00","belgium") + createGame("costa rica","16:00","germany") + createGame("japan","16:00","spain")) +

    createCard('02/12','sexta', createGame("coreia","12:00","portugal") + createGame("gana","12:00","uruguai") + createGame("camaroes","16:00","brazil") + createGame("serbia","16:00","suica"));




    
