<template>
  <div class="repos">
    <h2>Repos by {{ props.user }}({{ reposUser.public_repos }})</h2>

    <div class="row" v-if="listOfRepos.length > 0">
      <div class="col-sm-12 col-md-12">
          <ReposItem v-for="item of listOfRepos" :key="item.id" :item="item" />
      </div>
    </div>

    <div class="spinner-border m-5" role="status" v-else>
        <span class="visually-hidden">Loading...</span>
    </div>

  </div>
</template>


<script setup>
import { defineProps, onMounted, onUnmounted, ref, computed } from "vue";
import store from "../store"
import ReposItem from "../components/Pepos/ReposItem.vue"


const repos = ref([])
const reposPage = ref(1)
const props = defineProps(["user"]);

async function getReposbyUser() {
    const response = await fetch(`https://api.github.com/users/${props.user}/repos?per_page=100&page=${reposPage.value}`)
    const data = await response.json()
    repos.value.push(...data)
}

onMounted(async () => {
    await getReposbyUser()
    window.addEventListener("scroll", loadMoreRepos)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

const listOfRepos = computed(() => {
    return repos.value
})

const reposUser = computed(() => {
    return store.state.reposRoutedUser
})


async function loadMoreRepos () {
    reposPage.value += 1
    await getReposbyUser()
}


  	
</script>