import Image from "next/image";
import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user,statusCode }) => {
  if(statusCode===false){
    return (
      <Layout title="Github">
        <div className="w-4/12 mx-auto mt-4 bg-stone-900 rounded-lh shadow-lg shadow-purple-900 flex justify-center items-center flex-col py-4">
          <Image
            src={user.avatar_url}
            alt="project"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h1 className="text-center text-2xl font-bold">{user.name}</h1>
          <p className="text-justify text-gray-500">{user.bio}</p>
          <p className="py-2 px-4 bg-fuchsia-900 rounded-md shadow-md font-bold text-xl my-4">
            {user.location}
          </p>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
            {user.public_repos} Repositorys Publicated
          </p>
        </div>
      </Layout>
    );
  }else{
    return <Error statusCode={statusCode}/>;
  }
};
export async function getServerSideProps() {
  const response = await fetch("https://api.github.com/users/johngualteros");
  const data = await response.json();

  const statusCode = response.status > 200 ? response.status : false;
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}
export default Github;
