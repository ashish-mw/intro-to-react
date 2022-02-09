import Nav from "../components/Nav";

const Page = (props) => {
  return (
    <div className="main">
      {props.skipNav ? "" : <Nav />}
      {props.children}
    </div>
  );
};

export default Page;
