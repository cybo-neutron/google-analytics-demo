import ReactGA from "react-ga4";
import Form from "./components/form";

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
      <Form />

      <button className="bg-blue-500 p-1 text-white font-mono font-semibold mt-3 px-2">
        Sign up for the newsletter
      </button>
    </div>
  );
}

export default App;
