import Image from 'next/image';
import { Author } from '@/components/Author';

interface ArticleProps {
  post: {
    data: {
      id: string;
      thumbnail: string;
      date: string;
      category: string;
      title: string;
      excerpt: string;
      author: string;
    };
    previewUrl: string;
    category: {
      href: string;
    };
  };
}

const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

const Article: React.FC<ArticleProps> = ({ post }) => (
  <article key={post.data.id} className="flex flex-col items-start">
    <div className="relative w-full hover:scale-105 ease-in-out transition-all duration-300">
      <a href={post.previewUrl}>
        <Image
          src={post.data.thumbnail}
          alt=""
          width={500}
          height={500}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </a>
    </div>
    <div className="max-w-xl">
      <div className="mt-8 flex items-center gap-x-4 text-xs">
        <time dateTime={post.data.date} className="text-gray-500 dark:text-gray-300">
          {formatDate(post.data.date)}
        </time>
        <a
          href="{post.category.href}"
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {post.data.category}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
          <a href={post.previewUrl}>
            <span className="absolute inset-0" />
            {post.data.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{post.data.excerpt}</p>
      </div>
      {post.data.author && <Author author={post.data.author} />}
    </div>
  </article>
);

export default Article;