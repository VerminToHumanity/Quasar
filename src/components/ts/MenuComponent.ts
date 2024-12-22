import {mdiSearchWeb,mdiHome,mdiNote,mdiNoteMultiple,mdiAccountGroup} from '@quasar/extras/mdi-v7'

type menuItem = {
  name:string,
  route:string,
  icon:string,
}

function menu() {
  return [
    {name:'Search',route:'search',icon:mdiSearchWeb},
    {name:'Dashboard',route:'index',icon:mdiHome},
    {name:'My post',route:'myPost',icon:mdiNote},
    {name:'All post',route:'allPost',icon:mdiNoteMultiple},
    {name:'All user',route:'allUser',icon:mdiAccountGroup},
  ] as menuItem[];
}

export const accessMenu = menu();
