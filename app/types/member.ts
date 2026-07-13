export type Member = {
  id: string;

  name: string;
  englishName: string;

  slug: string;

  category:
    | "APEX"
    | "STREET FIGHTER"
    | "STREAMER"
    | "VALORANT"
    | "VALORANT ACADEMY"
    | "VALORANT GC"
    | "STAFF"
    | "CREATOR";

  role: string;
  birthday: string;

  profile: string;

  image: {
    url: string;
    height: number;
    width: number;
  };

  twitter?: string;
  youtube?: string;
  twitch?: string;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
