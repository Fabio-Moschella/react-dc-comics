import Alert from "./Alert";
import Content from "./Content";
import Merchandise from "./Merchandise";
import Termsofthesite from "./Termsofthesite";

export default function Main() {
  return (
    <>
      <Alert type="error" text="LIST ERROR" />
      <Alert>
        <h1>ATTENZION STAMM P ZUMPAAA`</h1>
      </Alert>

      <Content />
      <Merchandise />
      <Termsofthesite />
    </>
  );
}
