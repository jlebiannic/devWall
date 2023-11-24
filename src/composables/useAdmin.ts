import Resource from "@/interfaces/resourceInterface";
import { useResourceStore } from "@/stores/resourceStore";
import { storeToRefs } from "pinia";

export function useAdmin() {
  const resourceStore = useResourceStore();
  const { validResources } = storeToRefs(resourceStore);
  const { invalidResources } = storeToRefs(resourceStore);
  const supprimerAction = (resource: Resource) => {
    resource.id && resourceStore.removeResource(resource.id);
  };
  const ajouterAction = (resource: Resource) => {
    resource.isValid = true;
    resource.id && resourceStore.updateResource(resource);
  };

  return { validResources, invalidResources, ajouterAction, supprimerAction };
}
