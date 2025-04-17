import axios from "axios";
import { NASA_API_KEY } from "../config";

export const nivlResolver = {
    Query: {
        nivl: async (_: unknown, args: { query: string }) => {
            const { query } = args;
            try {
                const response = await axios.get(`https://images-api.nasa.gov/search`, {
                    params: {
                        q: query,
                        media_type: "image",
                    },
                });

                const items = response.data.collection.items;
                return items.map((item: any) => {
                    const data = item.data[0];
                    const link = item.links ? item.links[0].href : null

                    return {
                        title: data.title,
                        description: data.description,
                        nasa_id: data.nasa_id,
                        preview_url: link,
                    };
                });
            } catch (error) {
                console.error("Error fetching from NASA Image Library", error);
                return [];
            }
        },

        nivlAsset: async (_: unknown, { nasa_id }: { nasa_id: string }) => {
            const response = await axios.get(
                `https://images-api.nasa.gov/asset/${nasa_id}`
            );

            const items = response.data.collection.items;
            const files = items.map((item: any) => item.href);
            return { nasa_id, files }
        }
    }
}