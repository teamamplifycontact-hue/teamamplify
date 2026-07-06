export type News = {
  id: string;
  title: string;
  content: string;
  date: string;
  eyecatch: {
    url: string;
  };
  category: {
    id: string;
    name: string;
  };
  publishedAt: string;
};
