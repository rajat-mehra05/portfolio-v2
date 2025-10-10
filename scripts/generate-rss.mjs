import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from 'contentlayer/generated';

async function generate() {
  const feed = new RSS({
    title: 'Rajat Mehra',
    site_url: 'https://rajatmehra.dev',
    feed_url: 'https://rajatmehra.dev/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://rajatmehra.dev/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
