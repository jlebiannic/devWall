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
      await axios.delete(`${import.meta.env.VITE_API_SERVER}/resources/${id}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  async updateResource(resource: Resource): Promise<Resource | undefined> {
    try {
      const result = await axios.put(
        `${import.meta.env.VITE_API_SERVER}/resources/${resource.id}`,
        resource
      );
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export { resourceService };
