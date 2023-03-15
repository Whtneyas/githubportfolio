import './routie.js';
import { reposData } from './data.js'

export async function onRouteChanged(data){
    routie({
        'article/Repositories': async function () {
           await reposData();
            console.log("hiiiiiiii");
        }
    });
}