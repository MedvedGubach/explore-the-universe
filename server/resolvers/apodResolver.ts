import axios from "axios";
import { NASA_API_KEY } from '../config';
export const apodResolver = {
    Query: {
        apod: async (_: string, args: { date?: string }) => {
            const baseUrl = 'https://api.nasa.gov/planetary/apod';
            const url = `${baseUrl}?api_key=${NASA_API_KEY}${args.date ? `&date=${args.date}` : ''}`;

            try {
                const response = await axios.get(url);
                return response.data;
            } catch (error) {
                console.log('Error fetching APOD:', error);
                throw new Error('Failed to fetch APOD data');
            }
        }
    }
}