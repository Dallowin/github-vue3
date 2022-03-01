<template>
  <div class="thumbnail">
    <div class="caption">
      <h3>{{ props.item.name }}</h3>
      <p>{{ props.item.description }}</p>
      <p v-if="props.item.topics.length > 0">
        <a v-for="(tag, id) of props.item.topics" class="btn btn-primary btn-sm" :key="id" role="button">{{ tag }}</a>
      </p>

      <div class="labels">
        <p class="label label-primary">{{ props.item.language }}</p>
        <p class="label label-success"><span class="glyphicon glyphicon-star" aria-hidden="true"></span> {{ props.item.stargazers_count }}</p>
        <p class="label label-info">
          <span class="glyphicon glyphicon-random" aria-hidden="true"></span>
          {{ props.item.forks }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from  "vue"


const props = defineProps(['item'])
</script>