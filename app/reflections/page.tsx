import Link from "next/link";

import { getSinglePost } from "lib/notion";

// import DepthScene from 'components/DepthScene/DepthScene';

export default async function ReflectionsPage() {
  const posts = [
    await getSinglePost('a-poem-i-wrote-about-my-journey'),
    await getSinglePost('summer-camp-volunteer-reflections'),
    await getSinglePost('a-stone-passing-through-the-water'),
    await getSinglePost('yin-and-yang'),
    await getSinglePost('the-company-man'),
  ];

  return <>
    <div className="">
      <div className="px-6 pt-20 pb-6 container max-w-4xl">
        
        <div className="h-96 relative bg-black rounded-2xl overflow-hidden">
          <div className="px-6 pt-8 pb-6 absolute top-0 inset-x-0 text-theme-onPrimary z-10 pointer-events-none">
            <h1 className="text-4xl font-bold font-display">
              Reflections
            </h1>

            <p className="mt-1">
              MAY 2023
            </p>
          </div>

          {/* <DepthScene
            textures={[
              '/assets/reflections/bg.png',
              '/assets/reflections/ground.png',
              '/assets/reflections/leaves1.png',
              '/assets/reflections/leaves2.png',
              '/assets/reflections/campfire.png',
            ]}
            fireflies={true}
          /> */}
        </div>
      </div>

    </div>

    <div className="px-6 pt-6 pb-20 container max-w-4xl flex flex-col gap-6">
      {posts.map((post) => (
        <Link
          href={`/blog/${post?.metadata.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          key={post?.metadata.id}
        >
          <div
            className="px-6 py-6 bg-theme-surface/50 rounded-2xl hover:scale-[1.01] transition duration-200 ease-out hover:ease-in cursor-pointer"
          >
            <div className="flex items-end gap-3">
              {post?.metadata.icon?.type === 'emoji' ?
                <span className="text-4xl">{post?.metadata.icon.emoji}</span>
              : post?.metadata.icon?.type === 'external' ?
                <img
                  src={post?.metadata.icon.external.url}
                  alt={`Icon for ${post?.metadata.title}`}
                  className="w-8 h-8"
                />
              : null}

              <h1 className="text-2xl font-bold font-display">
                {post?.metadata.title || 'Untitled'}
              </h1>
            </div>

            {post?.metadata.description &&
              <p className="text-sm mt-0.5">
                {post?.metadata.description}
              </p>
            }
          </div>
        </Link>
      ))}
    </div>
  </>
}
