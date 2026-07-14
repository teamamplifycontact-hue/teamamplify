export type Member = {
  id: string;
  name: string;
  englishName: string;
  slug: string;
  role: string;
  birthday: string;
  profile: string;

  image: {
    url: string;
    width: number;
    height: number;
  };

  affiliation: {
    id: string;
    name: string;
    slug: string;
  };

  x?: string;
  youtube?: string;
  twitch?: string;
};
