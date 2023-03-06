<template>
  <div id="ide" class="ide"></div>
</template>

<script setup>
import sdk from "@stackblitz/sdk";
import { progress } from "@/composables/progress";

const props = defineProps(['repo', 'file'])

let vm = null;

onMounted(async () => {
  vm = await sdk.embedGithubProject("ide", props.repo, {
    terminalHeight: 45,
    openFile: props.file,
    view: "editor",
    forceEmbedLayout: true,
  });

  setInterval(() => getTestResults(), 5 * 1000);
});

async function getTestResults() {
  const files = await vm.getFsSnapshot();
  const testResults = JSON.parse(files["activate/test-results.json"]);
  progress.setProgress(testResults);
}
</script>

<style>
.ide {
  height: 100%;
}
</style>
