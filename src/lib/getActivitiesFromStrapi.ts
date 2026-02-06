import type { Activity } from "./types";

export async function getActivitiesFromStrapi(): Promise<Activity[]> {
  const res = await fetch(
    `${import.meta.env.STRAPI_URL}/api/activities?populate=image&sort=publishedAt:desc`,
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar atividades do Strapi");
  }

  const json = await res.json();

  return json.data.map((item: any): Activity => ({
    title: item.attributes.title,
    slug: item.attributes.slug,
    lead: item.attributes.lead,
    content: item.attributes.content,
    publishedAt: item.attributes.publishedAt,
    image: item.attributes.image?.data
      ? {
          url: item.attributes.image.data.attributes.url,
          alternativeText:
            item.attributes.image.data.attributes.alternativeText,
        }
      : undefined,
  }));
}
