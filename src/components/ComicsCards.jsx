import Card from "./Card";
import comics from "../../comics";

export default function ComicsCards() {
  return (
    <>
      <div className="container">
        <div className="row">
          {comics.map((comic) => {
            return <Card thumb={comic.thumb} text={comic.series} />;
          })}
        </div>
      </div>
    </>
  );
}
