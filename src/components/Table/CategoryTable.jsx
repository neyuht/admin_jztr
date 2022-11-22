import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect,useState } from "react";
import { useCallback } from "react";
import { Table } from "react-bootstrap";
import {getAllCategory} from "../../service/categoryService"


function CategoryTable() {
  const [data, setData] = useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async () => {
   const res = await getAllCategory()
   setData(res.data.data)
  },[])



  return (
    <div className="app">
      <div className="top">Admin >> Categorys >> View</div>
      <div className="p-1">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th> Name</th>
              <th>Status</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>

            {data.map(row =>{
              return (<tr>
                <td>{row?.id}</td>
                <td>{row?.name}</td>
                <td>{row?.createdAt}</td>
              </tr>)
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default CategoryTable;
