import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Lida Flarity", phonenumber: "376 695 5701" },
    { fullname: "Price Matieu	", phonenumber: "223 269 5958" },
    { fullname: "Shalna Ramalho	", phonenumber: "784 387 8049" },
    { fullname: "Jay Tiffney", phonenumber: "355 336 5748" },
    { fullname: "Jhon Ramalho	", phonenumber: "581 642 0609" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <List contacts={contacts} />
      <hr />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
