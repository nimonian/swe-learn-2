<template>
  <main>
    <Stackblitz
      :repo="repo"
      :file="file"
    />
    <div class="content">
      <Vimeo />
      <div class="markdown-body">
        <ContentDoc v-slot="{ doc }">
          <h1>{{ doc.title }}</h1>
          <h2>Activate</h2>
          <Progress></Progress>
          <ContentRenderer :value="doc"></ContentRenderer>
        </ContentDoc>
        <ContentNavigation />
      </div>
    </div>
  </main>
</template>

<script setup>
const { next } = useContent()
console.log(next)
const repo = 'nimonian/bootcamp-loops'
const file = 'activate/basicLoops.js'
</script>

<style>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.content {
  background-color: #15181e;
  overflow: auto;
  border-left: 0.5px solid #2e3138;
}
</style>
