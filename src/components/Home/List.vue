<template>
    <div class="list" style="margin-top: 20px">
        <div class="list-group">
            <h3>Найдено по вашему запросу: {{ totalCount }}</h3>
            <button @click="toggleDropdown()" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuDivider" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by {{ sortedvalue }}
                <span class="caret"></span>
            </button>
            <div :class="['dropdown ', { 'open' : data.dropdown }]">
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuDivider">
                    <li><a href="#" @click="sortByReps('repositories')">reps</a></li>
                    <li><a href="#" @click="sortByReps('joined')">joined</a></li>
                </ul>
            </div>
        </div>
        <div class="col-12">
            <div class="list-group" v-if="users">
                <ListItem v-for="item of users" :key="item.id" :user="item" />
            </div>
            
        </div>
    </div>
</template>


<script setup>
import { reactive, computed } from "vue"
import ListItem from "./ListItem.vue"
import store from "../../store"


const searchValue = computed(() => {
    return store.state.searchValue
})

const totalCount = computed(() => {
    return store.state.totalCountByName
})

const users = computed(() => {
    return store.state.users
})

const sortedvalue = computed(() => {
    return store.state.sortedvalue
})


const data = reactive({dropdown: false})


function toggleDropdown() {
    data.dropdown = !data.dropdown
}

function sortByReps(value) {
    store.commit("setSortedvalue", value)
    store.dispatch("searchByLogin", searchValue.value)

    toggleDropdown()
}
</script>