import { Review } from '../types/reviews';

const GOOGLE_PLACE_ID = 'ChIJLfySpTOuEmsRsc_JfJtljdc'; // Replace with your actual Place ID
const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your API key

export async function fetchGoogleReviews(): Promise<Review[]> {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    return data.result.reviews.map((review: any) => ({
      author: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.relative_time_description,
      profilePhoto: review.profile_photo_url
    }));
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
}