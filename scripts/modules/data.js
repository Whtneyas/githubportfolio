import {
    fetchRepos,
    getrepodata
} from './fetch.js'

const article = document.querySelector('main article:first-of-type');

export async function reposData() {
    console.log("HI overview");

    const data = await fetchRepos();
    const repoNames = data.map(item => item.name);
    const ulElement = document.createElement('ul');

    for (const repoName of repoNames) {
        try {
            const repodata = await getrepodata(repoName);
            console.log(repoName, repodata);

            const liElement = document.createElement('li');
            liElement.innerHTML=
            `
            <h3>${repodata.name}</h3>
            <p>${repodata.name}</p>
            <iframe src="${repodata.homepage}" frameborder="0" scrolling="no"></iframe>
            `;
            ulElement.appendChild(liElement);

        } catch (error) {
            console.error(error)
        }
    };

    console.log(ulElement);


    article.appendChild(ulElement);

    // console.log(article);
}

reposData();




// const repoDescription = data.map(item => item.description);
// const repoDemo = data.map(item => item.homepage);
// const repoLanguage = data.map(item => item.language);
// console.log(repoDemo);

// const array = repoNames.map((item, index) => {
//     return {
//         "name": repoNames[index],
//         "description": repoDescription[index],
//         "homepage": repoDemo[index],
//         "language": repoLanguage[index]

//     }
// })

// console.log("mijn array", array)

// const sectionElement = document.createElement('section');
// const ulnames = document.createElement('ul');


// repoNames.forEach((reponame) => {
//     const liElement = document.createElement('li');
//     const h3Element = document.createElement('h3');
//     const pElement = document.createElement('p')
//     const container = document.createElement('ul')
//     const containerLi = document.createElement('li')

//     h3Element.innerText = `${reponame}`
//     liElement.appendChild(h3Element);
//     ulnames.appendChild(liElement);
//     return ulnames;
// });

// sectionElement.appendChild(ulnames);