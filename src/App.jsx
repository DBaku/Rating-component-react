import { useState } from "react";

import "./App.css";

const App = () => {
    const [checked, setChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!checked) {
            alert("bitte wählen sie mindestens eine option aus");
            return;
        }
        alert("formular erfolgreich abgeschickt");
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <img src="./icon-star.svg" alt="" />
                    <h5>How did we do?</h5>
                    <p className="text">
                        Please let us know how we did with your support request. All feedback is
                        appreciated to help us improve our offering!
                    </p>
                    <div className="inputWrapper">
                        <div>
                            <input
                                className="btn-group"
                                type="checkbox"
                                id="option1"
                                name="option1"
                                checked={checked}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                className="btn-group"
                                type="checkbox"
                                id="option2"
                                name="option2"
                                checked={checked}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                className="btn-group"
                                type="checkbox"
                                id="option3"
                                name="option3"
                                checked={checked}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                className="btn-group"
                                type="checkbox"
                                id="option4"
                                name="option4"
                                checked={checked}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                className="btn-group"
                                type="checkbox"
                                id="option5"
                                name="option5"
                                checked={checked}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="button2" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};
export default App;

// das untere benutzen button statt input in verbindung mit checkbox!

{
    /* <div onSubmit={handleSubmit} className="card" style="width: 18rem">
      <img src="./icon-star.svg" className="card-img-top" alt="..." />
      <div className="card-body">
          <h5 className="card-title">How did we do?</h5>
          <p className="card-text">
              Please let us know how we did with your support request. All feedback is
              appreciated to help us improve our offering!
          </p>
      </div>
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group" role="group" aria-label="First group">
              <button type="button" className="btn btn-prima">
                  1
              </button>
              <button type="button" className="btn btn-prima">
                  2
              </button>
              <button type="button" className="btn btn-prima">
                  3
              </button>
              <button type="button" className="btn btn-prima">
                  4
              </button>
              <button type="button" className="btn btn-prima">
                  5
              </button>
          </div>
      </div>

      <button className="btn btn-primary" value="Submit" type="submit">
          SUBMIT
      </button>
  </div> */
}
