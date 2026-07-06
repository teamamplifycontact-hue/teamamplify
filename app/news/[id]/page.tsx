import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { client } from "../../lib/microcms";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;

  const news = await client.get({
    endpoint: "news",
    contentId: id,
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="max-w-[1150px] w-full mx-auto pt-[60px] pb-[140px]">
        {/* アイキャッチ */}
        <img
          src={news.eyecatch.url}
          alt={news.title}
          className="w-full rounded-sm object-cover"
        />

        {/* タイトル */}
        <h1 className="mt-[72px] text-[48px] font-bold leading-tight">
          {news.title}
        </h1>

        {/* 本文 */}
        <div
          className="news-content mt-[60px]"
          dangerouslySetInnerHTML={{
            __html: news.content,
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
