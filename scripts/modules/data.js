import {
    fetchRepos,
    getrepodata,
    getUserInfo
} from './fetch.js'


const article = document.querySelector('main article:first-of-type');
const header = document.querySelector("header")


// export function displayUserInfo(user) {
//     let userHtml = ``
//     userHtml = `
//     <article>
//         <div>
//             <h2>${user.name}</h2>
//             <img src="images/avatar.jpeg" alt="">
//         </div>

//         <!--Description box-->
//         <div>
//             <p></p>
//         </div>

//         <!--Arrow facind down-->
//         <div class="arrow-down">
//             <div class="arrow-down">
//             </div>
//         </div>

//     </article>`;

//     header.insertAdjacentHTML('beforeend', getUserInfo)
// }

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
            liElement.innerHTML =
                `
            <h3>${repodata.name}</h3>
            <p>${repodata.description}</p>  

            <div class="tags">
               <p><a href="${repodata.homepage}">Demo</a></p>
               <p>${repodata.language}</p>
            <div>            
        
         
            `;
            ulElement.appendChild(liElement);

        } catch (error) {
            console.error(error)
        }
    };

    // console.log(ulElement);

    article.appendChild(ulElement);

    // console.log(article);
}

reposData();


{
    /*  */
}

