import Resource from "@/interfaces/resourceInterface";
import axios from "axios";

const resoureService = {
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
};

export { resoureService };
