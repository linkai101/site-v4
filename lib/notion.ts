import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getDatabase = async () => {
  const db = await notion.databases.retrieve({
    // @ts-ignore
    database_id: process.env.DATABASE_ID,
  });

  return {
    // @ts-ignore
    tags: db.properties.Tags.multi_select.options,
  };
}

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    // @ts-ignore
    database_id: process.env.DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return posts.results.map((post) => ({
    id: post.id,
    // @ts-ignore
    title: post.properties.Name.title[0]?.plain_text,
    // @ts-ignore
    icon: post.icon,
    // @ts-ignore
    cover: post.cover,
    // @ts-ignore
    tags: post.properties.Tags.multi_select,
    // @ts-ignore
    description: post.properties.Description.rich_text[0]?.plain_text,
    // @ts-ignore
    date: post.properties.Date.date?.start/* || post.last_edited_time*/,
    // @ts-ignore
    slug: post.properties.Slug.rich_text[0]?.plain_text,
  }));
};

export const getSinglePost = async (slug:string) => {
  const res = await notion.databases.query({
    // @ts-ignore
    database_id: process.env.DATABASE_ID,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  
  if (!res.results.length) {
    return null;
  }

  const page = res.results[0];
  const metadata = {
    id: page.id,
    // @ts-ignore
    title: page.properties.Name.title[0]?.plain_text,
    // @ts-ignore
    icon: page.icon,
    // @ts-ignore
    tags: page.properties.Tags.multi_select,
    // @ts-ignore
    description: page.properties.Description.rich_text[0]?.plain_text,
    // @ts-ignore
    date: page.properties.Date.date?.start/* || page.last_edited_time*/,
    // @ts-ignore
    slug: page.properties.Slug.rich_text[0]?.plain_text,
  };
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  const comments = await notion.comments.list({ block_id: page.id });

  return {
    metadata,
    markdown: mdString || '',
    comments: await Promise.all(comments.results.map(async (comment) => {
      const user = await notion.users.retrieve({ user_id: comment.created_by.id });
      return {
        id: comment.id,
        discussion_id: comment.discussion_id,
        // @ts-ignore
        text: comment.rich_text[0].plain_text, // TODO: handle mentions, when rich_text lenght > 1
        date: comment.last_edited_time,
        created_by: {
          id: user.id,
          name: user.name,
          avatar: user.avatar_url,
        },
      }
    })),
  };
}