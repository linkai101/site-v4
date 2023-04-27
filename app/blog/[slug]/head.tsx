import { getSinglePost } from "lib/notion";

export default async function Head({ params: { slug } }: { params: { slug: string } }) {
  const post = await getSinglePost(slug);

  if (!post) return (
    <>
      <title>{`404 – Linkai Wu`}</title>
    </>
  );
  
  return (
    <>
      <title>{`${post?.metadata.title} – Linkai Wu`}</title>
      <meta property="og:title" content={`${post?.metadata.title} – Linkai Wu`} key="ogtitle"/>
      <meta name="description" content={`${new Date(post?.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })} — ${post?.metadata.description}`} key="desc" />
      <meta property="og:description" content={`${new Date(post?.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })} — ${post?.metadata.description}`} key="ogdesc" />
    </>
  )
}