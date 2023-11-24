import Resource from "@/interfaces/resourceInterface";
import { defineStore } from "pinia";
import { resourceService } from "@/service/resourceService";

export const useResourceStore = defineStore("resourceStore", {
  state: () => ({ resources: [] as Resource[] }),

  getters: {
    validResources: (state) => state.resources.filter((r) => r.isValid),
  },

  actions: {
    async loadResources() {
      const resFromAPI = await resourceService.getResources();
      this.resources = resFromAPI;
    },
  },
});
