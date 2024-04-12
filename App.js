
const parent = React.createElement(
    "div",
    { id: "parent" },[
    React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h1", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" },[
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h1", {}, "I am an h2 tag"),
  ]),
  ])
  //JSX
  console.log(parent); // object
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);