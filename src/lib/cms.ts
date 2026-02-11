const CMS = import.meta.env.PUBLIC_CMS_URL;

type StrapiResponse<T> = { data: T };

export async function cmsGet<T>(path: string): Promise<T> {
  const url = `${CMS}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CMS error ${res.status} on ${path}`);
  return res.json() as Promise<T>;
}
