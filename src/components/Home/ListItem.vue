<template>
  <div class="list-group-item">
    <div class="media">
      <div class="media-left media-middle">
        <a :href="`https://github.com/${props.user.login}`" target="_blank">
          <img
            :src="props.user.avatar_url"
            class="d-block"
            alt=""
            width="80"
            height="80"
          />
        </a>
      </div>
      <div class="media-body">
          <h4><router-link :to="`/repos/${props.user.login}`">{{ props.user.login }}</router-link></h4>
        <button class="btn btn-primary" type="button" v-if="Object.keys(userData.value).length === 0" @click="loadUserData()"> 
            Подробнее 
        </button>
        <ul class="nav nav-pills" role="tablist" v-else>
            <li role="presentation"><a @click="redirectToRepos()" href="#">public_repos <span class="badge">{{ userData.value.public_repos }}</span></a></li>
            <li role="presentation"><a href="#">followers/following <span class="badge">{{ userData.value.followers }}/{{ userData.value.following }}</span></a></li>
            <li role="presentation"><a href="#">name <span class="badge">{{ userData.value.name }}</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from "vue"
import { useRouter } from "vue-router"
import store from "../../store"

const props = defineProps(['user'])
const router = useRouter()

const userData = reactive({value: {}})

async function loadUserData() {
    const response = await fetch(`https://api.github.com/users/${props.user.login}`)
    const data = await response.json()
    userData.value = data
}


function redirectToRepos() {
    store.commit("setReposRoutedUser", userData.value)
    router.push(`/repos/${props.user.login}`)
}

</script>