import Layout from "../components/Layout";

const _error = ({statusCode}) => (
  <Layout>
    <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-900">Could not load your page Error {statusCode}</h1>
  </Layout>
);
export default _error;
