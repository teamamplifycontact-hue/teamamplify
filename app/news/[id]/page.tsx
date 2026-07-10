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

      <main
        className="
        w-full
        mx-auto
        pt-[111px]
        pb-[140px]
        px-6

        max-[931px]:px-4
      "
      >
        {/* アイキャッチ */}
        <img
          src={news.eyecatch.url}
          alt={news.title}
          className="
          max-w-[1667px]
                  w-full
          object-cover
        "
        />

        {/* タイトル */}
        <div className=" max-w-[1066px] mx-auto">
          <h1
            className="
          mt-24
          text-[48px]
          font-bold
          leading-tight
          max-[931px]:mt-12
          max-[931px]:text-[28px]
        "
          >
            {news.title}
          </h1>

          {/* 本文 */}
          <div
            className="
          news-content
          mt-[54px]
        "
            dangerouslySetInnerHTML={{
              __html: news.content,
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
