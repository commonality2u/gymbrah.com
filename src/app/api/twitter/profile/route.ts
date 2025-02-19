import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "FedericoFan";

    const res = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}?user.fields=description,profile_image_url,public_metrics`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
        next: {
          revalidate: 1800, // 30 minutes
        },
      }
    );

    if (!res.ok) {
      const errorDetails = await res.json();
      console.error("Error from Twitter API:", errorDetails);
      return NextResponse.json({ error: errorDetails }, { status: res.status });
    }

    const userData = await res.json();
    return NextResponse.json(userData);
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
