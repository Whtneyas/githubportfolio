 export const fetchRepos = async () => {
     const url = 'https://api.github.com/users/whtneyas/repos'
     let data;

     try {
         data = await (await fetch(url)).json();
         const repos = data.map((repo) => {
             return {
                 name: repo.name,
                 description: repo.description
             };
         });
         // console.log("mijn fetch data" , repos);
         return repos

     } catch (error) {
         console.log(error);
     }
 }

 // fetchRepos();


 export async function getUserInfo() {
     const url = 'https://api.github.com/users/whtneyas';
     let data;

     try {
         data = await (await fetch(url)).json();
         const {
             login,
             avatar_url,
             followers,
             following
         } = data;

         return {
             username: login,
             avatar: avatar_url,
             followers,
             following
         };

     } catch (error) {
         console.error(error);
     }
 }

 export async function getrepodata(repoName) {
     const url = `https://api.github.com/repos/whtneyas/${repoName}`;
     try {
         const response = await fetch(url);
         const data = await response.json();
        //  console.log(data);
         return data;

     } catch (error) {
        //  console.error(error);
        console.error('Error fetching data:');
     }
 }

//  getrepodata("blok-tech")