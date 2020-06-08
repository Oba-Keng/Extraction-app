import { getData } from "../lib/data";

export default function Home({ allData }) {
  return (
    <section>
      {allData.map(({ title, id }) => (
        <div key={id}>
          {title}
        </div>
      ))}
    </section>
  );
}

export async function getStaticProps() {
  const allData = getData();
  return {
    props: {
      allData
    }
  };
}
