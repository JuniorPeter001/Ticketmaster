const selected = JSON.parse(localStorage.getItem("selectedTicket"));

document.getElementById("sec").innerText = selected.sec;
document.getElementById("row").innerText = selected.row;
document.getElementById("seat").innerText = selected.seat;

document.getElementById("ticketPreview").innerHTML = `
<div class="ticket">
    <div class="ticket-top">
        BTS WORLD TOUR 'ARIRANG' IN MADRID
        <div>Sat, Jun 27 • Estadio Riyadh Air Metropolitano</div>
    </div>
</div>
`;

function goBack(){
    window.location.href="tickets.html";
}

function submitTransfer(){
    const name =
        document.getElementById("firstName").value + " " +
        document.getElementById("lastName").value;

    const email = document.getElementById("email").value;

    localStorage.setItem("transferName", name);
    localStorage.setItem("transferEmail", email);
    localStorage.setItem("transferSec", selected.sec);
    localStorage.setItem("transferRow", selected.row);
    localStorage.setItem("transferSeat", selected.seat);

    window.location.href="success.html";
}