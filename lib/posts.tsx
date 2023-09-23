import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');


export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            date: matterResult.data.date,
            title: matterResult.data.title,
            description: matterResult.data.description,
            tags: matterResult.data.tags,
            thumbnail: matterResult.data.thumbnail,
        };

        // Combine the data with the id
        return blogPost;
        });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
        return 1;
        } else {
        return -1;
        }
    });
    }

    export async function getPostData(id: string) {
        const fullPath = path.join(postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

        const contentHtml = processedContent.toString();

        const blogPostWithHTML: BlogPost & { contentHtml: string } = {
            id,
            title: matterResult.data.title,
            description: matterResult.data.description,
            date: matterResult.data.date,
            tags: matterResult.data.tags,
            thumbnail: matterResult.data.thumbnail,
            contentHtml,
        };

        return blogPostWithHTML;
    }
    export function getPostsByTag(tag: string) {
        const allPostsData = getSortedPostsData();
        return allPostsData.filter((post) => post.tags.includes(tag));
    }