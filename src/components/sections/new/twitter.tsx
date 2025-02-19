"use client";

import { useState } from "react";
import { MdFavorite } from "react-icons/md";

interface TwitterProfile {
  username: string;
  profile_image_url: string;
  description: string;
  public_metrics: {
    followers_count: number;
    following_count: number;
    tweet_count: number;
    listed_count: number;
    like_count: number;
    media_count: number;
  };
}

const formatCount = (count: number) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

export function TwitterFollowers() {
  const [profile, setProfile] = useState<TwitterProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      setError(null);
      const response = await fetch("/api/twitter/profile");
      if (!response.ok) throw new Error("Failed to fetch profile");
      const data = await response.json();
      console.log(data);
      setProfile(data.data);
    } catch (err) {
      setError("Error fetching profile");
      console.error("Error fetching Twitter profile:", err);
    }
  };

  // Fetch on mount
  useState(() => {
    fetchProfile();
  });

  if (error) return null;
  if (!profile) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src="https://pbs.twimg.com/profile_images/1878768340144934912/80UCfW20_400x400.jpg"
          alt={profile.username}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-medium">@{profile.username}</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2" title="Followers">
              <span className="font-semibold">
                {formatCount(profile.public_metrics.followers_count)}{" "}
                <span className="text-gray-600 font-normal">Followers</span>
              </span>
            </div>

            <div className="flex items-center gap-2" title="Following">
              <span className="font-semibold">
                {formatCount(profile.public_metrics.following_count)}{" "}
                <span className="text-gray-600 font-normal">Following</span>
              </span>
            </div>

            <div className="flex items-center gap-2" title="Likes">
              <MdFavorite className="size-4 text-red-500" />
              <span>{formatCount(profile.public_metrics.like_count)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
