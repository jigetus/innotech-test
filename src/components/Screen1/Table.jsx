import React from "react";
import { useHistory } from "react-router-dom";

const Table = (props) => {
  let { heroes } = props;
  const history = useHistory();

  if (heroes.length === 0) return <h1>Loading...</h1>;
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {heroes.map((el, id) => {
          return (
            <tr
              key={el.char_id}
              onClick={() => history.push(`/character/${el.char_id}`)}
            >
              <td>{el.char_id}</td>
              <td>{el.name}</td>
              <td>{el.birthday}</td>
              {/* </Link>{" "} */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
