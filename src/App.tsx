import ReactGA from "react-ga4";

ReactGA.initialize("G-NBHXTGFM1J");

const sendClickEvent = () => {
  console.log("clicked");
  ReactGA.event({
    action: "click_action",
    category: "click_category",
    label: "click_label",
    value: 4,
  });
};

function App() {
  return (
    <div className="min-h-screen bg-slate-500 bg-fixed px-2">
      <div>Home page</div>
      <button className="bg-blue-500 p-1" onClick={sendClickEvent}>
        Click here
      </button>
    </div>
  );
}

export default App;
