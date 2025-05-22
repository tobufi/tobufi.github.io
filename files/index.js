myLinks = {
    "Home":"index.html", /* hi */
    "Games":"games.html",
    "Media":"media.html",
    "Blog":"blog.html"
}

mySocials = {
    "Youtube":"https://www.youtube.com/@tobufi",
    "Twitter":"https://x.com/abcdefg65941713"
}

header = document.getElementById('header')
if (header != null) { 
    icon = document.createElement('img')
    title = document.createElement('h1')
    socials = document.createElement('div')
    links = document.createElement('ul')
    bar = document.createElement('hr')

    icon.src = "files/images/me.png"
    icon.style.width = "125px"
    title.textContent = "tobuFI's Website"
    title.id = "title"

    socials.id = "socials"
    for (var key in mySocials) { 
        link = document.createElement('a')
        link.textContent = key 
        link.href = mySocials[key]
        socials.appendChild(link)
        if (key != "Twitter") { /*update w/ last item in mysocials list*/
            socials.innerHTML = socials.innerHTML + " - "
        }
    }

    links.id = "sitelinks"
    for (var key in myLinks) {
        casing = document.createElement('li')
        link = document.createElement('a')
        link.textContent = key
        link.href = myLinks[key]
        casing.appendChild(link)
        links.appendChild(casing)
    }

    bar.id = "titlehr"

    header.appendChild(icon)
    header.appendChild(title)
    header.appendChild(socials)
    header.appendChild(links)
    header.appendChild(bar)
}
