export default function Alert({ type, text, children }) {
  return (
    <div className="container">
      <div className={`alert alert-${type}`}>{children || text}</div>
    </div>
  );
}
