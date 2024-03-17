let arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "pehle Bhi Main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Vailly Ne", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
];

let allSongs = document.querySelector(".all-song");

let selectedSong =0;
let audio = new Audio();


function mainfunc(){
    let cultter = "";
    arr.forEach(function (obj,index) {
        cultter += `<div class="song-card" id="${index}">
                 <div class="part-1">
                    <img src="${obj.img}" alt="">
                    <h3>${obj.songName}</h3>
                 </div>
                    <h6>3:35</h6>
                </div>`
    })
    
    allSongs.innerHTML = cultter;
    
    audio.src = arr[selectedSong].url
}

mainfunc();

allSongs.addEventListener("click",function(dets){
    
    selectedSong = dets.target.id;
    mainfunc();
    audio.play();
   
})