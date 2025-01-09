<template>
  <q-layout class = "overflow-auto window-height">
    <div class = "q-pa-md q-mb-xl row items-start justify-center q-gutter-sm">
      <q-card
      class = "my-card"
      v-for="(post,index) in posts"
      :key = "index"
      >
      <q-card class="my-card" flat bordered>
      <q-img :src='post.image' width ="100%" height="300px"/>
      <div class="col text-h6 ellipsis">
       {{ post.title }}
      </div>
       <div class = "text-subtitle1">
       {{ post.username }}
      </div>
      <div class="text-caption text-grey">
       {{ post.description .substring(0,200) }} ...
      </div>
      <q-card-actions align="right">
        <q-btn flat round
           color="red"
           icon-left="favorite"
           :label="`Like ${post.upVoteCount}`"
           @click="like(post.id)"
        />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>

      </q-card>
    </div>
  </q-layout>
</template>

<script lang="ts" setup>
import { posts } from 'components/ts/IndexComponent';

const like = (id:number) => {
  console.log(id);
}
</script>
