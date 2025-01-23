import Link from "next/link";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return (<div className="max-w-screen-xl mx-auto">
    <ul>
      {data.map(post=>(<li key={post.id} className="my-5 border-b pb-2">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </li>))}
    </ul>
  </div>);
}
