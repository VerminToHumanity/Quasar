import {ref} from 'vue'

const profileTemp = ref({
  nodel : <boolean>  false,
  id : <number> 0,
  username: <string>'hossein',
  email: <string>'hossein@gmail.com',
  avatar: <string> 'images/avatar.png',
  newAvatar:undefined,
  password:<string>'',
  role:<string>'user'
});

export {profileTemp};

