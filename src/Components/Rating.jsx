import { useState } from "react";

const Rating = () => {
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checked) {
            alert("Bitte wählen Sie mindestens eine Option aus");
            return;
        }
        alert("Formular erfolgreich abgeschickt");
    };

    const handleChange = (e) => {
        setChecked(e.target.checked);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="checkbox"
                    id="option1"
                    name="option1"
                    checked={checked}
                    onChange={handleChange}
                />
                <label htmlFor="option1">Option 1</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="option2"
                    name="option2"
                    checked={checked}
                    onChange={handleChange}
                />
                <label htmlFor="option2">Option 2</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="option3"
                    name="option3"
                    checked={checked}
                    onChange={handleChange}
                />
                <label htmlFor="option3">Option 3</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Rating;
