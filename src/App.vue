<template>

</template>

<script>
import {NewsApiService} from "@/news/services/news-api.service";

export default {
  name: 'App',

  data() {
    return {
      articles: [],
      errors: [],
      newsApi: new NewsApiService(),
    };
  },

  created() {
    console.log('created');
    this.getArticlesForSource('bbc-news');
  },

  methods: {

    // Fetch Articles for selected Source
    getArticlesForSource(sourceId) {
      this.newsApi.getArticlesForSource(sourceId)
          .then(response => {
            this.articles = response.data.articles;
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push(e);
          });
    },

    // Fetch Articles for Source including Source URL
    getArticlesForSourceWithUrl(source) {
      this.newsApi.getArticlesForSource(source.id)
          .then(response => {
            this.articles = response.data.articles;
            this.articles.map(article => article.source.url = source.url);
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push(e);
          });
    },

    // On Source selected
    setSource(source) {
      this.getArticlesForSourceWithUrl(source);
    }
  }
}
</script>
