import Nav from "../components/Nav";

const Page = (props) => {
  return (
    <div className="main">
      <Nav />
      {props.children}
    </div>
  );
};

export default Page;
