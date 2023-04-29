import Link from 'next/link';

import { getDatabase, getAllPublished } from 'lib/notion';

export const revalidate = 60; // seconds

export default async function BlogPage() {
  const { tags } = await getDatabase();
  const posts = await getAllPublished();

  return <>
    <div className="px-6 pt-20 pb-6 container max-w-4xl">
      <h1 className="text-4xl font-bold font-display">
        Blog
      </h1>

      <p className="mt-1">
        My thoughts, ideas, experiments, and more. Check out what I'm up to!
      </p>

      <div className="min-h-[30rem] flex flex-col md:flex-row bg-theme-surface border-2 border-theme-surface rounded-xl overflow-hidden mt-8">
        <div className="p-4 flex flex-col gap-6 md:w-44">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>

          <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1">
            <p className="text-xs text-theme-onBackground/40 font-semibold">
              Tags
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag: { id:string, name:string, color:string }) =>
                <span
                  className={`px-2.5 pt-1.5 pb-1 text-xs text-notion-${tag.color||'primaryVariant'} bg-notion-${tag.color||'primaryVariant'}/10 rounded-full`}
                  key={tag.id}
                >
                  {tag.name}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-theme-background">
          <div className="hidden md:block px-8 pt-4 pb-3 bg-theme-surface/50">
            <p className="text-lg font-bold font-display">
              Posts
            </p>
          </div>

          <div className="flex flex-col">
            {posts.map((post) =>
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <div className="px-6 py-4 flex items-center gap-6 border-b-2 border-theme-surface">
                  <div className="flex-1">
                    <div className="flex items-end gap-2">
                      {post.icon?.type === 'emoji' ?
                        <span className="text-2xl">{post.icon.emoji}</span>
                      : post.icon?.type === 'external' ?
                        <img
                          src={post.icon.external.url}
                          alt={`Icon for ${post.title}`}
                          className="w-8 h-8"
                        />
                      : null}

                      <h2 className="text-base font-medium">
                        {post.title || 'Untitled'}
                      </h2>
                    </div>

                    <p className="text-xs text-theme-onBackground/40 uppercase">
                      {post.date && new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </p>
                    
                    <div className="flex gap-2">
                      {post.tags.map((tag: { id: string, name: string, color: string }) =>
                        <span
                          className={`px-2.5 pt-1.5 pb-1 text-xs text-notion-${tag.color||'primaryVariant'} bg-notion-${tag.color||'primaryVariant'}/10 rounded-full mt-1`}
                          key={tag.id}
                        >
                          {tag.name}
                        </span>
                      )}
                    </div>
                    
                    {post.description &&
                      <p className="text-sm font-light mt-2.5">
                        {post.description}
                      </p>
                    }
                  </div>

                  {post.cover &&
                    <div className="h-28 aspect-square bg-theme-surface/50 rounded-lg overflow-hidden">
                      <img
                        src={
                          post.cover.type==='file' ? post.cover.file.url
                          : post.cover.type==='external' ? post.cover.external.url
                          : null
                        }
                        alt={`Cover for ${post.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  }
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </>;
}
