<template>
  <q-page-container>
    <q-page class = "window-width window-height row justify-center item-center">
      <div class="columns">
        <div class = "row">
        <h5 class = "bg-blue text-h5 text-width q-my-md">Welcome to my homemade shop</h5>
        </div>
        <div class = "row">
          <q-card square bordered class = "q-pa-lg w-400">
            <q-card-section>
              <q-form class = "q-gutter-md">
                <q-input
                v-model="registerParameter.name"
                 square
                 filled
                 clearable
                 type="text"
                 label="First & Last name"
                 />
                 <q-input
                 v-model="registerParameter.username"
                 standout="bg-teal text-white"
                 square
                 filled
                 clearable
                 type="text"
                 label="Username"
                 />
                 <q-input
                 v-model="registerParameter.password"
                 standout="bg-teal text-white"
                 square
                 filled
                 clearable
                 type="password"
                 label="Password"
                 />
                 <q-file
                 v-model="registerParameter.avatar"
                 filled
                 bottom-slots
                 label="Avatar"
                 counter
                  >
                  <template v-slot:append>
                   <q-avatar>
                     <img src="https://preview.redd.it/should-i-ask-in-r-place-if-we-make-a-spamton-head-just-for-v0-hgvs7s650jdb1.jpg?width=640&crop=smart&auto=webp&s=29e09063cfbe2523ee1f73c8693e305441e8bf5d">
                   </q-avatar>
                  </template>
                 </q-file>
              </q-form>
            </q-card-section>
            <q-card-section>
              <q-btn
              @click="register()"
              unelevated
              color="light-blue-8"
              size="lg"
              class="full-width"
              label="Register"
              />
              <q-btn
              @click = "login()"
              unelevated
              color="purple"
              size="lg"
              class="full-width q-mt-sm"
              label="Login"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script lang = "ts" setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';



const registerParameter = ref({
    name : <string>'',
    username : <string>'',
    password : <string>'',
    avatar:undefined,
});

const register = () => {
  router.replace({name:'register'})
  console.log(registerParameter.value.name,registerParameter.value.username,registerParameter.value.password,registerParameter.value.avatar);
}

const router = useRouter();
const login = () => {
  router.replace({name:'login'})

}


</script>
