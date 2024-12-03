import React from 'react';
import { Star } from 'lucide-react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const GoogleReviews = () => {
  const { data, error } = useSWR('/api/getReviews', fetcher, {
    refreshInterval: 300000, // Refresh every 5 minutes
    revalidateOnFocus: false,
  });

  if (error) {
    console.error('Error loading reviews:', error);
    return null;
  }

  if (!data) {
    return (
      <div className="py-12">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-6 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-4 w-32 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  const { reviews, rating, total_ratings } = data;

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Customer Reviews</h3>
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
            className="h-6 mr-2"
          />
          <span className="text-gray-600">
            AJ GRANITE MARBLE LLC • {rating?.toFixed(1)} Stars ({total_ratings} reviews)
          </span>
        </div>
        <div className="flex justify-center text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-6 w-6 ${i < Math.round(rating || 0) ? 'fill-current' : 'stroke-current'}`}
            />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews?.slice(0, 6).map((review: any, index: number) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start space-x-4 mb-4">
              <img
                src={review.profile_photo_url || 'https://via.placeholder.com/40'}
                alt={review.author_name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{review.author_name}</h4>
                <div className="flex text-yellow-400 mt-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-500 text-sm">{review.relative_time_description}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm line-clamp-4">{review.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://g.co/kgs/JrVFDeU"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          View all reviews on Google
          <Star className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;