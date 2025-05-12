//import { readdirSync } from 'fs';
//var files = readdirSync('/images/games/');

let media = {
    "car_stuck.gif":{
        "Date":"9/22/2024",
        "Desc":"Car testing in The Hangout. I tried using BodyPositions — DID NOT WORK."
    },
    "BrawlRCC.png":{
        "Date":"10/30/2024", 
        "Desc":"Group photo of the BrawlR team while building the Community Construction map"
    },
    "tree.png":{
        "Date":"1/24/2025", 
        "Desc":"A christmas tree I made in the ROBLOX game 'Sandbox.'"
    },
}

spawn = document.getElementById("container")

function applylist(direct, info, index) {
    margin = "10px"
    if (index%3 == 0) {
        margin = "0px"
    }

    element = document.createElement('div')
    element.id = 'media'
    element.style = "margin-right:" + margin

    directlink = "files/images/media/" + direct
    linkie = document.createElement('a')
    linkie.href = directlink

    img = document.createElement('img')
    img.style.width = "100%"
    img.src = directlink

    title = document.createElement('h3')
    title.style = "margin-top:0px"
    title.textContent = direct.slice(0, -4) //assuming everything is .png or .gif
    
    myInfo = document.createElement('p')
    myInfo.style = "margin-top:-15px"
    myInfo.innerHTML = "<i>" + info.Date + "</i><br>" + info.Desc

    spawn.appendChild(element)
    element.appendChild(linkie)
    linkie.appendChild(img)
    element.appendChild(title)
    element.appendChild(myInfo)
}

if (spawn != null) {
    index = 0
    for (var key in media) {
        index = index + 1
        applylist(key, media[key], index)
    }
}