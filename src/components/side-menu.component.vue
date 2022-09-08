<template>

</template>

<script>
import { NewsApiService } from "@/news/services/news-api.service";

export default {
  name: "side-menu",

  data() {
    return {
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    };
  },
  created() {
    this.newsApi.getSources()
        .then(response => {
          this.sources = response.data.sources;
          this.sources.map(source => source.getUrlToLogo = this.newsApi.getUrlToLogo(source));
          console.log(`data: ${response.data.sources}`);
        })
        .catch(e => {
          this.errors.push(e);
        });
  },
  methods: {
    onSourceSelected(source) {
      this.$emit('source-selected', source);
    }
  }
}
</script>

<style scoped>

</style>
