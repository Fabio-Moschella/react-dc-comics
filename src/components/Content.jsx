import ComicsCards from "./ComicsCards";

export default function Content() {
  return (
    <>
      <ComicsCards />
      <div className="background-black">
        <div className="container">
          <section className="content-sec">
            <h1 className="title-content">-- Content goes here --</h1>
          </section>
        </div>
      </div>
    </>
  );
}
