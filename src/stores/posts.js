import { defineStore } from "pinia";
import { getPosts } from "../api";

export const usePosts = defineStore("posts", {
  state: () => {
    return {
      posts: [],
    };
  },

  actions: {
    async getPosts() {
      this.posts = await getPosts();
    },
  },
});
