import Resource from "@/interfaces/resourceInterface";
import { defineStore } from "pinia";
import { resourceService } from "@/service/resourceService";
import { computed, ref } from "vue";

export const useResourceStoreV0 = defineStore("resourceStore", {
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

export const useResourceStore = defineStore("resourceStore", () => {
  const resources = ref<Resource[]>([]);
  const validResources = computed(() =>
    resources.value.filter((r) => r.isValid)
  );
  async function loadResources() {
    resources.value = await resourceService.getResources();
  }

  async function createResource(
    resource: Resource
  ): Promise<Resource | undefined> {
    const newResource = await resourceService.createResource(resource);

    if (newResource) {
      resources.value.unshift(newResource);
    }
    return newResource;
  }

  return { resources, validResources, loadResources, createResource };
});
