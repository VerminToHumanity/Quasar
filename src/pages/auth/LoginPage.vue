<template>
    <q-page>
        <q-card class = "w-400 mt-200 q-pa-lg">
           <q-input v-model="userParameter.username" type="text" label="Username" class="q-my-sm" />
           <q-input v-model="userParameter.password" type="text" label="Password" class="q-my-sm" />
           <q-btn color="primary" icon="check" label="Login" class="q-my-sm full-width bg-positive "/> 
           <q-btn color="primary" icon="check" label="Register" class="q-my-sm full-width bg-secondary" />
        </q-card>

    </q-page>
</template>

<script lang = "ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const userParameter = ref({
    username : <string>'',
    password : <string>'',
});

const login = () => {
    console.log(12345)
}

const register = () => {
    router.replace
}


</script>