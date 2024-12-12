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
                 v-model = "loginParameter.email"
                 standout="bg-teal text-white"
                 square
                 filled
                 clearable
                 type="email"
                 label="Email"
                 />
                 <q-input
                 v-model="loginParameter.username"
                 standout="bg-teal text-white"
                 square
                 filled
                 clearable
                 type="text"
                 label="Username"
                 />
                 <q-input
                 v-model="loginParameter.password"
                 standout="bg-teal text-white"
                 square
                 filled
                 clearable
                 type="password"
                 label="Password"
                 />

              </q-form>
            </q-card-section>
            <q-card-section>
              <q-btn
              @click="login()"
              unelevated
              color="light-blue-8"
              size="lg"
              class="full-width"
              label="Login"
              />
              <q-btn
              @click = "register()"
              unelevated
              color="purple"
              size="lg"
              class="full-width q-mt-sm"
              label="Register"
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



const loginParameter = ref({
    email : <string>'',
    username : <string>'',
    password : <string>'',
});

const login = () => {
    console.log(loginParameter.value.email,loginParameter.value.username,loginParameter.value.password);
}

const router = useRouter();

const register = () => {
    router.replace({name:'register'})
}


</script>
