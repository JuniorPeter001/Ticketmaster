let currentIndex = 0;

let tickets = JSON.parse(localStorage.getItem("tickets")) || [
    {sec:120,row:7,seat:13},
    {sec:120,row:7,seat:14},
    {sec:120,row:7,seat:15}
];

function renderTickets(){
    const swiper = document.getElementById("swiper");
    const dots = document.getElementById("dots");
    swiper.innerHTML="";
    dots.innerHTML="";

    tickets.forEach((t,i)=>{
        swiper.innerHTML += `
        <div class="ticket">
            <div class="ticket-top">
                <small>Artist Presale</small>
                <div class="ticket-info">
                    <div><span>SEC</span><strong>${t.sec}</strong></div>
                    <div><span>ROW</span><strong>${t.row}</strong></div>
                    <div><span>SEAT</span><strong>${t.seat}</strong></div>
                </div>
            </div>

            <div class="ticket-image">
                <img src="images/images-bts.jpeg">
                <div class="overlay">
                    <h2>BTS WORLD TOUR 'ARIRANG' IN MADRID</h2>
                    <p>Sat, Jun 27, 8:00 PM • Estadio Riyadh Air Metropolitano</p>
                </div>
            </div>

            <div class="ticket-body">
                <p>Gate 2</p>
                <button class="view-btn" onclick="openQR()">View Ticket</button>
                <p style="margin-top:10px;font-weight:600;">Ticket Details</p>
            </div>
        </div>
        `;
        dots.innerHTML += `<span class="${i===0?'active':''}"></span>`;
    });
}

renderTickets();

/* Swipe */
let startX=0;
document.getElementById("swiper").addEventListener("touchstart",e=>{
    startX=e.touches[0].clientX;
});

document.getElementById("swiper").addEventListener("touchend",e=>{
    let diff=e.changedTouches[0].clientX - startX;
    if(diff<-50 && currentIndex < tickets.length-1) currentIndex++;
    if(diff>50 && currentIndex>0) currentIndex--;
    updateSwiper();
});

function updateSwiper(){
    document.getElementById("swiper").style.transform=
        `translateX(-${currentIndex*95}%)`;

    document.querySelectorAll(".dots span").forEach((d,i)=>{
        d.classList.toggle("active",i===currentIndex);
    });
}

/* QR */
function openQR(){
    document.getElementById("qrModal").style.display="flex";
}
function closeQR(){
    document.getElementById("qrModal").style.display="none";
}

/* Transfer */
function openTransfer(){
    const selected = tickets[currentIndex];

    document.getElementById("pSec").innerText = selected.sec;
    document.getElementById("pRow").innerText = selected.row;
    document.getElementById("pSeat").innerText = selected.seat;

    document.getElementById("transferPanel").classList.add("active");
}

function closeTransfer(){
    document.getElementById("transferPanel").classList.remove("active");
}

function switchTab(tab){
    alert(tab + " clicked (Add-Ons logic next)");
}