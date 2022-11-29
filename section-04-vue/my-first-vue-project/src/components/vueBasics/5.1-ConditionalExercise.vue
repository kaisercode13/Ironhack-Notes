<template>

    <!-- EJ 1 -->

    <h1 v-if="showUp === true">I'm showing up beacuse our reactive data is true!</h1>
    <h1 v-else>I'm the option anytime our reactive data cannot be read as true</h1>

    <!-- EJ 2 -->
    <p v-if="language === 'HTML'">Today we are learing {{language}}</p>
    <p v-else-if="language === 'CSS'">Today we are learing {{language}}</p>
    <p v-else-if="language === 'JS'">Today we are learing {{language}}</p>
    <p v-else>Today there's no class!</p>

    <!-- EJ 3 -->
    <div v-if="show">
    <h2>{{mySelf.name}}</h2>
    <p v-if="mySelf.age>18">I am an adult! :)</p>
    <p v-else>I'm still a minor</p>

    <p v-if="mySelf.hasCodedBefore">I am still a newbie to code but I'm learning fast</p>
    <p v-else>This is not my first time at the javascript rodeo</p>
</div>
  
</template>

<script setup>
import { ref, reactive } from "vue";
const showUp = ref(true);

const language = ref("CSS");

const mySelf = reactive({
    name: "Alex",
    age: 35,
    hasCodedBefore: false,
});

const show = ref(true);

</script>

<style>

</style>