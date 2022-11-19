import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import "./style.css";
function ProductTable() {
  return (
    <div className="app">
      <div className="top">Admin >> Product >> View</div>
      <div className="p-1">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Parent ID</th>
              <th> Name</th>
              <th>Creat at</th>
              <th>Update</th>
              <th>Delete at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>@John</td>
              <td>1</td>
              <td>John</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Harry</td>
              <td>Potter</td>
              <td>@harrypotter</td> <td>2</td>
              <td>Harry</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Kylie Jainer</td>
              <td>@Kylie</td>
              <td>3</td>
              <td colSpan={2}>Kylie Jainer</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default ProductTable;
