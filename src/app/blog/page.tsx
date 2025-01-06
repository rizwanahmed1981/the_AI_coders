


import Image from "next/image";
import { client } from '@/sanity/lib/client'
// import BlogCard from "@/app/components/blogCard"
import { type SanityDocument } from "next-sanity";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";


const query = `*[_type == "post"]{
  title,summary,content,"image":image.asset->url,"slug":slug.current
}`;


const options = { next: { revalidate: 30 } };

export default async function blog() {
  const posts = await client.fetch(query);

  return (
    <main className="container mx-auto min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Most Recent Posts</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
        {posts.map((post: Post) => (
          <ul key={post.id} className=" flex flex-col gap-4">
            <li> <img src={urlForImage(post.image).width(400).url()} /></li>

            <li><Link href={post.slug} className="text-lg font-bold cursor-pointer">{post.title}</Link></li>
            <li>{post.summary}</li>
            {/* <li>{post.author}</li> */}


          </ul>
        ))}
      </div>

    </main>
  );
}


