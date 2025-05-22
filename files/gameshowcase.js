//import { readdirSync } from 'fs';
//var files = readdirSync('/images/games/');

let games = {
    "brawlr":{
        'title':"BrawlR",
        'visit':"https://www.roblox.com/games/18667278953",
        'description':"An in-dev fighting game that uses the classic Roblox aesthetic as a base for a unique and expanding fighting enviroment. Developed by <a href='https://tn.productions'>TN Productions.</a>"
    },
    /*"spooking_out":{ // replace with 'honorable mentions' list since the github download has dead redirect
        'title':"Spooking Out",
        'download':"Spooking Out.rbxl",
        'description':"2022 Novetus Halloween Place Content Winner. Defeat ghosts and throw them back to HELL! A collaborative effort by me & <a href='https://realja.me/'>realjame.</a>"
    },*/
    "hangout":{
        'title':"The Hangout",
        'download':"The Hangout.rbxl",
        'description':"A hangout game created in the 2010M client by me & <a href='https://x.com/fededoesstuff'>fed</a> & <a href='https://www.superphonerecordings.com/'>Zork.</a>"
    },
    "waapp_au":{
        'title':'Work At A Pizza Place AU',
        'download':"Work At A Pizza Place AU.rbxl",
        'description':"An altered version of Work At A Pizza Place created in the 2010L client for a <a href='https://www.youtube.com/watch?v=q7c3vHEy_sA'>canceled web series.</a>"
    },
    "waapp_2009":{
        'title': "Work At A Pizza Place 2009",
        'download':"Work At A Pizza Place 2009 Recreation.rbxl",
        'description':"A recreated version of the early 2009 version of Work At A Pizza Place by me & Zork."
    }
}

spawn = document.getElementById("container")

function applylist(key, game) {
    element = document.createElement('div')
    element.id = 'showcase'
    spawn.appendChild(element)

    label = document.createElement('h2')
    label.textContent = game['title'] + " - "
    element.appendChild(label)

    destination = ""
    txtcontent = ""
    if (game['download']) { 
        destination = 'files/places/' + game['download']
        txtcontent = "DOWNLOAD"
    } else { 
        destination = game['visit']
        txtcontent = "VISIT"
    }

    downlink = document.createElement('a')
    downlink.href = destination
    downlink.textContent = txtcontent
    label.appendChild(downlink)

    for (let i = 1; i < 4; i++) { // 1-3
        direct = 'files/images/games/' + key + '/' + i + '.png'
        linkie = document.createElement('a')
        linkie.href = direct 
        element.appendChild(linkie)
        image = document.createElement('img')
        image.id = 'thumb'
        image.src = 'files/images/games/' + key + '/' + i + '.png'
        linkie.appendChild(image)
    }

    desc = document.createElement('p')
    desc.innerHTML = game['description']
    element.appendChild(desc)
}

if (spawn != null) {
    for (var key in games) {
        applylist(key, games[key])
    }
}