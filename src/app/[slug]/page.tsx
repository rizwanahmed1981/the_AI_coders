import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,summary,content,"image":image.asset->url,"slug":slug.current,
  "author": author->{name, "image": image.asset->url, bio}
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

    const options = { next: { revalidate: 30 } };

    export default async function PostPage({
      params,
    }: {
      params: { slug: string };
    }) {
      const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
      const postImageUrl = post.image
        ? urlFor(post.image)?.width(550).height(310).url()
        : null;
      const authorImageUrl = post.author?.image
        ? urlFor(post.author.image)?.width(64).height(64).url()
        : null;
    
      return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
          <Link href="/" className="hover:underline">
            ← Back to posts
          </Link>
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt={post.title}
              className="aspect-video rounded-xl"
              width="700"
              height="500"
            />
          )}
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
    
          {/* Author Section */}
          {post.author && (
            <div className="flex items-center gap-4 mb-8">
              {authorImageUrl && (
                <img
                  src={authorImageUrl}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <p className="text-lg font-semibold">{post.author.name}</p>
                {post.author.bio && (
                  <div className="prose text-sm">
                    <PortableText value={post.author.bio} />
                  </div>
                )}
              </div>
            </div>
          )}
    
          {/* Main Content */}
          {post.content && (
            <div className="prose">
              <PortableText value={post.content} />
            </div>
          )}
    
          <div className="prose">
            {/* <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p> */}
          </div>
        </main>
      );
    }