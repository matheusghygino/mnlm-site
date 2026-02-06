import { mockActivities } from "./activities.mock";
import { getActivitiesFromStrapi } from "./getActivitiesFromStrapi";
import type { Activity } from "./types";

export async function getActivities(): Promise<Activity[]> {
  try {
    // Quando Strapi estiver no ar
    if (import.meta.env.STRAPI_URL) {
      const strapiActivities = await getActivitiesFromStrapi();

      // Merge: Strapi + mock (mock entra se quiser manter conteúdo fixo)
      return [...strapiActivities, ...mockActivities]
        .slice()
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        );
    }
  } catch (error) {
    console.warn("Strapi offline, usando mockActivities");
  }

  // Fallback absoluto
  return mockActivities
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    );
}
