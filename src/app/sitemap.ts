import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getExercises } from "@/actions/exercises/exercises-list";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const domain = headersList.get("host") as string;
  const protocol = "https";

  // Get all exercises
  const exercisesResponse = await getExercises({ page: 1, limit: 1000 });
  const exercises = exercisesResponse?.data?.success
    ? exercisesResponse.data.data.exercises
    : [];

  // Base URLs
  const baseUrls = [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${protocol}://${domain}/exercises`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Exercise detail pages
  const exerciseUrls = exercises.map((exercise: any) => ({
    url: `${protocol}://${domain}/exercises/${exercise.id}-${exercise.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...baseUrls, ...exerciseUrls];
}
