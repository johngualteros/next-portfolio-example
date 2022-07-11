import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";
const Post = () => {
    const router = useRouter();
    const currentPost=posts.find(post=>post.title===router.query.title);
    
  return(
  <Layout>
    {
        currentPost && (
            <div className="rounded-md shadow-md shadow-violet-900 p-4 w-6/12 mx-auto">
                <h1 className="text-center font-bold text-red-600 text-2xl">{currentPost.title}</h1>
                <img src={currentPost.image} alt={currentPost.title} height={150} />
                <p>{currentPost.description}</p>
            </div>
        )
    }
  </Layout>
  )
};
export default Post;
