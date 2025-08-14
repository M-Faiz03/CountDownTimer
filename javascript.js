const endDate = new Date("14 Aug, 2025 17:03:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {

    const now = new Date().getTime();

    const distCovered = now - startDate;
    const distPending = endDate - now;
    
    //calculate days,hrs,min,secs
    // const days=Math.floor(distPending/(24 * 60 * 60 * 1000));
    // const hrs=Math.floor(distPending%(24 * 60 * 60 * 1000)/(60*60*1000));
    // const mins=Math.floor(distPending%(60 * 60 * 1000)/(60*1000));
    // const secs=Math.floor(distPending%(60 * 1000)/1000);

    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const oneSecInMillis = (1000);
    const days=Math.floor((distPending/(oneDayInMillis)));
    const hrs=Math.floor(distPending%(oneDayInMillis)/(oneHourInMillis));
    const mins=Math.floor(distPending%(oneHourInMillis)/(oneMinInMillis));
    const secs=Math.floor(distPending%(oneMinInMillis)/oneSecInMillis);

    //Populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = mins;
    document.getElementById("sec").innerHTML = secs;


    //Calculate width percentage for progress bar
    const totalDist = endDate - startDate;
    const percentageDist = (distCovered/totalDist)*100;

    //set width for progress bar
    document.getElementById("progressBar").style.width = percentageDist + "%";

    if(distPending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progressBar").style.width = "100%";
    }
}
,1000);
