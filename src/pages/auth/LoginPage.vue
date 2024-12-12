<template>
  <q-page-container>
    <q-page class = "window-width window-height row justify-center item-center">
      <div class="columns">
        <div class = "row">
        <h5 class = "text-h5 text-width q-my-md">Welcome to my homemade shop</h5>
        </div>
        <div class = "row">
          <q-card square bordered class = "q-pa-lg w-400">
            <q-card-section>
              <q-form class = "q-gutter-md">

              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
        <q-card class = "w-400 mt-200 q-pa-lg">
           <q-input v-model="userParameter" type="text" label="Username"  />
           <q-input v-model="userParameter" type="text" label="Password" />
        </q-card>
    </q-page>
  </q-page-container>
</template>

<script lang = "ts" setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const userParameter = ref({
    username : <string>'',
    password : <string>''
});

const login = () => {
    console.log(1234);
}

const register = () => {
    router.replace({name:'register'})
}


</script>
