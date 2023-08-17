import { FC } from "react";
import ReactGA from "react-ga4";

interface formProps {}

const formSubmit = () => {
  ReactGA.event({
    action: "form_submit",
    category: "user_details",
    label: "user_label",
    value: 0,
  });
};

const Form: FC<formProps> = ({}) => {
  return (
    <div className="flex flex-col w-[200px] gap-y-2 bg-slate-900 p-2">
      <input type="text" placeholder="first name" className="outline-none" />
      <input type="text" placeholder="last name" className="outline-none" />

      <button className="bg-blue-500" onClick={formSubmit}>
        submit
      </button>
    </div>
  );
};

export default Form;
