// import { getData } from "../lib/data";
import fetch from "isomorphic-unfetch";

export default function LoadBook(props) {
  return <div>{props.data}</div>;
}

LoadBook.getInitialProps = async function() {
  const res = await fetch("http://www.gutenberg.org/files/2600/2600-0.txt");

  const data = await res.text();

  return {data};
};

// export async function getStaticProps() {
//   const allData = getData();
//   return {
//     props: {
//       allData
//     }
//   };
// }
