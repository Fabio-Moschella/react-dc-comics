export default function Card({ text, thumb }) {
  return (
    <div className="col-1-6">
      <div className="card">
        <div className="card-image">
          <img src={thumb} alt={text} />
        </div>
        <div className="card-body">{text}</div>
      </div>
    </div>
  );
}
