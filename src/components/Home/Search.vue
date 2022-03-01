<template>
    <div class="search">
        <label for="basic-url">Введите имя пользователя</label>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon3">https://github.com/</span>
            <input type="text" v-model="username" class="form-control" id="basic-url" aria-describedby="basic-addon3">
            <span class="input-group-btn">
                <button class="btn btn-default" @click="searchByLogin()" type="button">Поиск</button>
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, provide, inject  } from "vue"
import store from "../../store"

const username = ref("")

async function searchByLogin() {
    await store.dispatch("searchByLogin", username.value)
}

</script>