import ComicsCards from "./ComicsCards";

export default function Content() {
  return (
    <>
      <div className="background-black">
        <div className="container">
          <section className="content-sec">
            <h1 className="title-content">
              <ComicsCards />
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}
