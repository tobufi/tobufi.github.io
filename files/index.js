//import { readdirSync } from 'fs';
//var files = readdirSync('/images/games/');

let games = {
    "hangout":{
        'title':"The Hangout",
        'download':"The Hangout.rbxl",
        'description':"A hangout game created in the 2010M client by fed, Zork, and tobuFI (me!)"
    },
    "waapp_au":{
        'title':'Work At A Pizza Place AU',
        'download':"Work At A Pizza Place AU.rbxl",
        'description':"An altered version of Work At A Pizza Place created in the 2010L client for a canceled web series."
    },
    "waapp_2009":{
        'title': "Work At A Pizza Place 2009",
        'download':"Work At A Pizza Place 2009 Recreation.rbxl",
        'description':"A recreated version of the early 2009 version of Work At A Pizza Place by Zork & tobuFI (me!)"
    }
}

function applylist(key, game) {
    spawn = document.getElementById(key);
    if (spawn != null) {
        //console.log(element)
        element = document.createElement('div')
        element.id = 'showcase'
        spawn.appendChild(element)

        label = document.createElement('h2')
        label.textContent = game['title'] + " - "
        element.appendChild(label)

        downlink = document.createElement('a')
        downlink.href = 'files/places/' + game['download']
        downlink.textContent = 'DOWNLOAD'
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
        desc.textContent = game['description']
        element.appendChild(desc)
    }
}

for (var key in games) {
    // check if the property/key is defined in the object itself, not in parent
    if (games.hasOwnProperty(key)) {           
        console.log(key);
        applylist(key, games[key])
    }
}