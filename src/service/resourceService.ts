import { useAuthStore } from "./../stores/authStore";
import Resource from "@/interfaces/resourceInterface";
import axios from "axios";

const resourceService = {
  async getResources(): Promise<Resource[]> {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_SERVER}/resources?_sort=date&_order=desc`
      );
      return result.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getResource(id: string): Promise<Resource | undefined> {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_SERVER}/resources?id=${id}`
      );
      return result.data[0];
    } catch (error) {
      console.error(error);
    }
  },
  async createResource(resource: Resource): Promise<Resource | undefined> {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_SERVER}/resources`,
        resource
      );
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },

  async removeResource(id: string) {
    try {
      const { headers } = useAuthStore();
      await axios.delete(
        `${import.meta.env.VITE_API_SERVER_PROTECTED}/resources/${id}`,
        headers
      );
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  async updateResource(resource: Resource): Promise<Resource | undefined> {
    try {
      const { headers } = useAuthStore();

      const result = await axios.put(
        `${import.meta.env.VITE_API_SERVER_PROTECTED}/resources/${resource.id}`,
        resource,
        headers
      );
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export { resourceService };
