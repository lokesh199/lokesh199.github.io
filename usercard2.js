let dhoniAsTT = {
    image: "dhoni_ticket_collector.jpg",
    title: "MS Dhoni",
    designation: "Ticket Collector"
}
let dhoniAsIndianCaptian = {
    image: "dhoni_winning_wordcup.jpg",
    title: "MSD",
    designation: "Captain of Indian Cricket Team"
}
let isDhoniTT = true;
let currentImg;
let currentTitle;
let designation;
let flipState = function() {
    if(isDhoniTT){
        currentImg = dhoniAsIndianCaptian.image;
        currentTitle = dhoniAsIndianCaptian.title;
        designation = dhoniAsIndianCaptian.designation;
        document.getElementById("dhoni-image").src = currentImg;
        document.getElementById("title").innerHTML = currentTitle;
        document.getElementById("description").innerHTML = designation;
        isDhoniTT = false;
    }
    else{
        currentImg = dhoniAsTT.image;
        currentTitle = dhoniAsTT.title;
        designation = dhoniAsTT.designation;
        document.getElementById("dhoni-image").src = currentImg;
        document.getElementById("title").innerHTML = currentTitle;
        document.getElementById("description").innerHTML = designation;
        isDhoniTT = true;
    }
};