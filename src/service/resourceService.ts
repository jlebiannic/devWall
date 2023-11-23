import Resource from "@/interfaces/resourceInterface";
import axios from "axios";

const resourceService = {
  async getResources(): Promise<Resource[]> {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_SERVER}/resources`
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
};

export { resourceService };
