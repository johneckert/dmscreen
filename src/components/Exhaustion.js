import "./Components.css";

function Exhaustion() {
  //should make up own descriptions
  return (
    <table className="component-body">
      <tr>
        <th>Level</th>
        <th>Effect</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Disadvantage on ability checks</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Speed is halved</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Disadvantage on attack/saving rolls</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Hit point maximum halved</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Speed reduced to 0</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Death</td>
      </tr>
    </table>
  );
}

export default Exhaustion;
