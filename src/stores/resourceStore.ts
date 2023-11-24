import Resource from "@/interfaces/resourceInterface";
import { defineStore } from "pinia";
export const useResourceStore = defineStore("resourceStore", {
  state: () => ({ resources: [] as Resource[] }),
});
