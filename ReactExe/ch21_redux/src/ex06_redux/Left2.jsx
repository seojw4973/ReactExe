import Left3 from "./Left3";

function Left2(props) {
  console.log("render Left2");
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
}

export default Left2;
