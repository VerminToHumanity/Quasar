<template>
  <q-layout view="hHh LpR fFf" class ="auth-background">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        Menu
        <q-avatar>
          <img src="images/d7f466edce44.png">
        </q-avatar>

        <q-toolbar-title>
        </q-toolbar-title>
        <span>Profile</span>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-list separator>
        <q-item
          v-for="(item,index) in accessMenu"
          :key="index"
          :to="{ name: item.route }"
          v-ripple
          clickable
          >
          <q-avatar><q-icon :name="item.icon"></q-icon></q-avatar>
          <q-item-section><q-item-label class="q-ml-md">{{ item.name }}</q-item-label></q-item-section>
           </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <div class = "avatarBox row items-center justify-center">
        <q-avatar size="150px" class="overlapping">
          <q-img :src="profileTemp.avatar"/>
        </q-avatar>
      </div>
      <div class="q-pa-md row items-center q-gutter-md justify-center">
        <q-card flat bordered class="text-center">
          <q-card-section>
            <div class="text-h6">Profile</div>
          </q-card-section>
          <q-separator inset/>
          <q-card-section class="q-pt-none">
            <div class="text-h6">Username</div>
            {{ profileTemp.username }}
          </q-card-section>
          <q-separator inset/>
          <q-card-section class="q-pt-none">
            <div class="text-h6">Email</div>
            {{ profileTemp.email }}
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-md q-gutter-sm text-center">
        <q-btn
          class="full-width"
          label="Update"
          color = "purple-10"
          @click="profileTemp.nodel = true"
        />
        <q-btn
          class="full-width"
          label="Logout"
          color = "blue"
          @click="Logout()"
        />
        <q-dialog v-model="profileTemp.nodel" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Update Profile</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="profileTemp.username"
          label="Your Username"/>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
          dense
           v-model="profileTemp.email"
          label="Your Email"/>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-file
                 v-model="profileTemp.newAvatar"
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
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Update" @click="update()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { accessMenu } from 'components/ts/MenuComponent'
import {profileTemp} from 'components/ts/ProfileComponent'
export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      accessMenu,
      profileTemp,
      update(){
        console.log('profileTemp.value')
      },
      logout(){
        console.log('Logout');
      }
    }
  }
}
</script>
