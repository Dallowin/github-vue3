<template>
    <nav>
        <ul class="pager">
            <li><a href="#" v-if="pageNumber > 1" @click="prevPage()">Previous</a></li>
            <li><a href="#">{{ pageNumber }}</a></li>
            <li><a href="#" v-if="totalCount > 1" @click="nextPage()">Next</a></li>
        </ul>
    </nav>
</template>



<script setup>
import { computed  } from "vue"
import store from "../../store"

const pageNumber = computed(() => {
    return store.state.perPage
})

const searchValue = computed(() => {
    return store.state.searchValue
})

const totalCount = computed(() => {
    return Math.floor(store.state.totalCountByName / 50)
})

async function nextPage() {
    store.commit("setPageCount", pageNumber.value == totalCount.value ? totalCount.value : pageNumber.value + 1)
    store.dispatch("searchByLogin", searchValue.value)
}

async function prevPage() {
    store.commit("setPageCount", pageNumber.value > 1 ? (pageNumber.value - 1) : 1)
    store.dispatch("searchByLogin", searchValue.value)
}

</script>