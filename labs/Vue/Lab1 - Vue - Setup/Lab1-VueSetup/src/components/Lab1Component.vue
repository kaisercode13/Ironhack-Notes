<template>
     <div>
    <!-- Iteration 1/2 -->
    <h2> Iteration 1 & 2</h2>
    <p>This is the {{ codeNumber }} {{ codeType }} component for {{excersice}}.</p>
    <br>
        <hr>
        <!-- Iteration 3 -->
        <br>
        <h2>Iteration 3</h2>
        <button @click="helloWorld">Hello World</button>
</div>
  

</template>
  


<script setup>

// Iteration 1/2
import { ref } from "vue";
let codeNumber = ref("First");
let codeType = ref("Vue");
let excersice = ref("Lab-1 Vue Setup");

//Iteration 3

const helloWorld = () => {
    console.log(`Hello World`);
}

</script>

<style>

</style>