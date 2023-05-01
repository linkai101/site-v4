import { notFound } from "next/navigation";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { getSinglePost } from "lib/notion";
import MarkdownComponents from "components/MarkdownComponents";

export const revalidate = 60; // seconds

export default async function BlogPostPage({ params: { slug } }: { params: { slug: string } }) {
  const post = await getSinglePost(slug);
  if (!post) notFound();

  return <>
    <div className="px-6 pt-20 pb-6 container max-w-4xl">
      {/* TITLE */}
      <div className="flex items-end gap-4">
        {post.metadata.icon?.type === 'emoji' ?
          <span className="text-5xl">{post.metadata.icon.emoji}</span>
        : post.metadata.icon?.type === 'external' ?
          <img
            src={post.metadata.icon.external.url}
            alt={`Icon for ${post.metadata.title}`}
            className="w-12 h-12"
          />
        : null}

        <h1 className="text-3xl font-bold font-display">
          {post.metadata.title || 'Untitled'}
        </h1>
      </div>
      
      {/* DATE */}
      {post.metadata.date &&
        <p className="text-base text-theme-onBackground/40 font-medium uppercase mt-2">
          Published {new Date(post.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </p>
      }
      
      {/* TAGS */}
      {post.metadata.tags.length > 0 &&
        <div className="flex gap-2 mt-1">
          {post.metadata.tags.map((tag: { id: string, name: string, color: string }) =>
            <span
              className={`px-3 pt-1.5 pb-1 text-sm text-notion-${tag.color||'primaryVariant'} bg-notion-${tag.color||'primaryVariant'}/10 rounded-full mt-1`}
              key={tag.id}
            >
              {tag.name}
            </span>
          )}
        </div>
      }

      {/* COMMENTS */}
      {(post.comments.length > 0 || !post.metadata.isPublished) &&
        <div className="pt-5 pb-3 flex flex-col gap-3 border-y border-theme-onBackground/10 mt-6">
          {!post.metadata.isPublished &&
            <div className="flex gap-3">
              <span className="text-xl">
                🔗
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-none">
                  This is an unlisted post.
                </p>
                <p className="text-sm mt-0.5">
                  Content may be incomplete or not meant to be published.
                </p>
              </div>
            </div>
          }
          {post.comments.map((comment:any) =>
            <div className="flex gap-3" key={comment.id}>
              <img
                src={comment.created_by.avatar}
                alt={`Avatar of ${comment.created_by.name}`}
                className="w-6 h-6 bg-theme-surface rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-end gap-1.5">
                  <p className="text-sm font-semibold leading-none">
                    {comment.created_by.name}
                  </p>
                  <p className="text-xs text-theme-onBackground/50 leading-none">
                    {new Date(comment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </p>
                </div>
                <p className="text-sm mt-0.5">
                  {comment.text}
                </p>
              </div>
            </div>
          )}
        </div>
      }

      <ReactMarkdown
        children={post.markdown}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        rehypePlugins={[rehypeRaw]}
        // @ts-ignore
        components={MarkdownComponents}
        // className="prose mt-10"
        className="mt-10"
      />
    </div>
  </>;
}
