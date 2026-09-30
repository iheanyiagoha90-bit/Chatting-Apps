const timeupdate = document.querySelector(".timeupdate")
const dateupdate = document.querySelector(".dateupdate")
const printButton = document.getElementById("print");


function updateTimeAndDate(){
    const now = new Date()

    dateupdate.textContent = now.toLocaleDateString("en-GB", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });
   
    timeupdate.textContent = now.toLocaleTimeString("en-GB",{hour12: true})
}
setInterval(updateTimeAndDate, 1000)
updateTimeAndDate()
