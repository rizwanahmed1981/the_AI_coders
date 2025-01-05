


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

export default async function IndexPage() {
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






// export const revalidate = 60; // seconds

// export default async function Home() {

// const query = `*[_type=='post'] | order(_createdAt asc){

// summary,image,title,
//   "slug":slug.current
// }`;

//   const posts: Post[] = await client.fetch(query)

//   return (
//     <main className="flex min-h-screen flex-col ">
//       <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
//         Most Recent blogs
//       </h1>
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//         {
//           posts.map((post: Post) => (
//             <BlogCard post={post} key={post.slug} />
//           ))
//         }

//       </section>
//     </main>
//   );
// }
