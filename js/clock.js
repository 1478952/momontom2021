const clock = document.querySelector(".clock")

function getTime(){
    const Time = new Date();
    const Hour = String(Time.getHours()).padStart(2,"0");
    const Minutes = String(Time.getMinutes()).padStart(2,"0");
    clock.innerText = `${Hour}:${Minutes}`
}
    getTime()
   setInterval(getTime,1000)