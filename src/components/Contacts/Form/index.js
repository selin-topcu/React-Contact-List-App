import { useState, useEffect } from "react";
const initialFormValues = { fullname: "", phonenumber: "" };
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    //Formun içindekileri yazılanları sıfırlıyoruz
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //console da çıkan ifade hızlı bir şekilde kayboluyor bu yüzden preventDefault ile durdurabiliriz
    e.preventDefault();

    if (form.fullname === "" || form.phonenumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <h4>Add Contact</h4>
          <input
            name="fullname"
            placeholder="Full Name"
            onChange={onChangeInput}
            value={form.fullname}
            required
          />
        </div>
        <div>
          <input
            name="phonenumber"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phonenumber}
            required
          />
        </div>

        <button className="btn">Add</button>
      </div>
    </form>
  );
}

export default Form;
