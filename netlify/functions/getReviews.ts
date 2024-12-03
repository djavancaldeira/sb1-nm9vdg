import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const PLACE_ID = 'ChIJLfySpTOuEmsRsc_JfJtljdc'; // AJ GRANITE MARBLE LLC
const API_KEY = process.env.GOOGLE_API_KEY;

export const handler: Handler = async () => {
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Google API key is not configured' }),
    };
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?` +
      `place_id=${PLACE_ID}` +
      `&fields=reviews,rating,user_ratings_total` +
      `&key=${API_KEY}`,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      },
      body: JSON.stringify({
        reviews: data.result.reviews || [],
        rating: data.result.rating,
        total_ratings: data.result.user_ratings_total,
      }),
    };
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch reviews' }),
    };
  }
};