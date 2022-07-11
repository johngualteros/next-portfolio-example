import Link from "next/link";
import Layout from "../components/Layout";
import { posts } from "../profile";

const PostCard = ({ post }) => {
  return (
    <div className="rounded-md shadow-md shadow-violet-900 p-4">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} height={150} />
      <p>{post.description}</p>
      <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
        <button className="py-2 rounded-md my-4 bg-purple-600 w-full">
          Read
        </button>
      </Link>
    </div>
  );
};
const Blog = () => (
  <Layout title="Blog">
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  </Layout>
);
export default Blog;
