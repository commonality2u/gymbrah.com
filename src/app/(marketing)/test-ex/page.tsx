import { Suspense } from "react";
import { getExerciseById } from "@/actions/exercises/exercise-id";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

async function TestExercisePageContent() {
  const result = await getExerciseById({ id: "0001" }); // Using a sample ID

  if (!result?.data?.success || !result?.data) {
    return (
      <div className="container max-w-4xl py-8">
        <h1 className="text-2xl font-bold mb-4">Exercise Not Found</h1>
        <p className="text-muted-foreground">
          The requested exercise could not be found.
        </p>
      </div>
    );
  }

  const exercise = result.data.data;

  return (
    <div className="container max-w-4xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl capitalize">{exercise.name}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="capitalize">
              {exercise.body_part}
            </Badge>
            <Badge variant="secondary" className="capitalize">
              {exercise.target}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <img
              src={exercise.gif_url}
              alt={`${exercise.name} demonstration`}
              className="rounded-lg w-full max-w-md mx-auto"
              loading="lazy"
            />

            <div>
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2">
                {exercise.instructions.map(
                  (instruction: string, index: number) => (
                    <li key={index} className="text-muted-foreground">
                      {instruction}
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function TestExercisePage() {
  return (
    <Suspense
      fallback={
        <div className="container max-w-4xl py-8 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      }
    >
      <TestExercisePageContent />
    </Suspense>
  );
}
