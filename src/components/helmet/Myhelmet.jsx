import { Helmet } from "react-helmet";

const Myhelmet = ({ title }) => {
  return (
    <Helmet>
      <title>Facebook{title}</title>
      <meta name="description" content="Facebook" />
      <meta name="keywords" content="Facebook" />
      <link
        rel="icon"
        type="image/png"
        href="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
      />
    </Helmet>
  );
};

export default Myhelmet;
