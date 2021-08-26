import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <h4>Search Contact</h4>
      <input
        placeholder="Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.fullname}</span>
            <span>{contact.phonenumber}</span>
          </li>
        ))}
      </ul>
      <p>
        <border>Total: {filtered.length}</border>
      </p>
    </div>
  );
}

export default List;
