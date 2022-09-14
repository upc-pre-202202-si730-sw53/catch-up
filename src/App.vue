<template>
  <div class="w-full">
    <!-- Toolbar and Sidebar -->
    <div>
      <pv-menubar class="sticky bg-primary">
        <template #start>
          <pv-button label="CatchUp"
                     icon="pi pi-bars"
                     @click="toggleSidebar"/>
          <side-menu v-model:visible="sidebarVisible"
                     v-on:source-selected="setSource"/>
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-menubar>
    </div>
    <!-- Main Content -->
    <div>
      <unavailable-content v-if="errors"/>
      <main-content v-else :articles="articles"/>
    </div>
    <!-- Footer -->
    <footer-content/>
  </div>
</template>

<script>
import {NewsApiService} from "@/news/services/news-api.service";
import FooterContent from "@/components/footer-content.component.vue";
import SideMenu from "@/components/side-menu.component.vue";
import LanguageSwitcher from "@/components/language-switcher.component.vue";
import MainContent from "@/components/main-content.component.vue";
import UnavailableContent from "@/components/unavailable-content.component.vue";

export default {
  name: 'App',
  components: {UnavailableContent, MainContent, LanguageSwitcher, SideMenu, FooterContent},
  data() {
    return {
      sidebarVisible: false,
      articles: [],
      errors: null,
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
            this.articles.map(article => {
              article.source.url = source.url;
              article.source.urlToLogo = source.urlToLogo;
            });
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push(e);
          });
    },

    // On Source selected
    setSource(source) {
      this.getArticlesForSourceWithUrl(source);
      this.toggleSidebar();
    },

    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  }
}
</script>
