import {ref} from 'vue' ;
type Posts = {id : number; title:string; text: string};
const posts = ref([
    {
        id:1,
        title : 'wow'
        text : 'wowowo' 
    },

] as Posts[]);
export {posts}; 