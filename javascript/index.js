import artistsArray from "./data.js"


// console.log(artistsArray);

const sortArtist = artistsArray.sort(function(a,b) {
    let nameA = a.name;
    let nameB = b.name;
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});

// console.log(sortArtist);

const curatorChoice = artistsArray.sort(function(a,b) {
    return a.curatorChoice - b.curatorChoice;
});

console.log(curatorChoice);

// let artistContainer = document.createElement('div')
// artistContainer.classList.add('artist_name')
// let content = artistsArray.forEach
// `<span><a href="#${Anastasi.id}">${Anastasi.name} ${Anastasi.surname}</a></span><br>`

// artistContainer.innerHTML = content

// const container_name = document.querySelector('.container_names')

// container_name.append(artistContainer)

