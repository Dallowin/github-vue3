<template>
    <div class="home">
        <Search />
        <List v-if="users.length" />
        <Pagination v-if="users.length" />
    </div>
</template>


<script setup>
import Search from "../components/Home/Search.vue"
import List from "../components/Home/List.vue"
import Pagination from "../components/Home/Pagination.vue"

import {computed} from "vue"

import store from "../store"

const users = computed(() => {
    return store.state.users
})
</script>