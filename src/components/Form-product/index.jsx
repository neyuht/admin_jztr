import React, { useRef, useState } from 'react';
import '../../styles/main.css';
import Category from './Category';
import DetailsTable from './Details/details';
import * as request from '../../utils/http';
import Input from '../../scripts/components/input';
import Button from '../../scripts/components/button';
import '../../styles/main.css';

function FormProducts({fields}) {
  const [filter, setFilter] = useState("");
  const [pagins, setPagins] = useState([1]);
  const [indexPagin, setIndexPagin] = useState(1);
  const [isCheck, setIsChecked] = useState(false);
  const ref = useRef('')

  const onChange = () => {
    setIsChecked(!isCheck)
  }

  const createNewProduct = (e) => {
    e.preventDefault();
    console.log(ref.current);
    var { productName, selectStatus, selectCategory, description } = document.forms[1];
  
    const product = {  
      name: productName.value,
      status: Number(selectStatus.value),
      description: description.value,
      categoryId: Number(selectCategory.value),
    }
  
    request.post("/admin/products", product)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  const resetProduct = (e) => {
    document.forms[1].reset();
  };

  return (
    <main className={'main-wrapper'}>
      <section className={"container-main"}>
        <section className={"section-form"}>
          <form action="" className={'form-products'}>
            <div className={'form-information'}>
              <div className={'form-content'}>
                <div className={'form-group'}>
                  <input ref={ref} type="text" className={'products-input products-name'} name="productName" placeholder="Product's Name"/>
                </div>
        
                <div className={'form-group'} id="productStatus">
                  <select name="selectStatus" id="" className={'products-status'}>
                      <option disabled selected>Select Status</option>
                      <option value="0" ref={ref}>Available</option>
                      <option value="1" ref={ref}>Sold Out</option>
                  </select>
                </div>
        
                <div className={'form-group'} id="productCategory">
                  {<Category />}
                </div>

                
                <div className={'form-group'}>
                  <textarea name="description" ref={ref} type="text" className={'products-description'} placeholder="Product's Description"/>
                </div>

                <div className={'form-group'}>
                  <div className={'checkbox-related'}>
                    <input  type="checkbox" className={'products-input products-related'} placeholder="Product's Description" onChange={onChange} checked={isCheck}/>
                    <span> No related products</span>
                  </div>
                </div>

                {isCheck && <DetailsTable />}
              </div>

              <div className={'form-img'}>
                <div className={'form-group'}>
                  <div className={'images'}></div>
                  <input name='image' type="file" className={'products-name'} />
                </div>
              </div>
            </div>

            <div className={'form-cta'}>
              <button type="button" className={"btn btn-create"} onClick={createNewProduct}>Create</button>
              <button type="button" className={"btn btn-update"}>Update</button>
              <button type="button" className={"btn btn-delete"}>Delete</button>
              <button type="button" className={"btn btn-reset"} onClick={resetProduct}>Reset</button>
            </div>
          </form>
        </section>
        
        <section className={"section-list"}>
            <section className={"list-promo"}>
              <section className={"filter-promo"}>
                <h2 className="heading">list promotion</h2>
                <Input
                  type={"text"}
                  name="search"
                  value={filter}
                  placeholder="Enter promotion"
                  // onChange={onSearch}
                />
              </section>
              <section className={"table-promo"}>
                <table>
                  <thead>
                    <tr>
                      <th>Product's Name</th>
                      <th>Status</th>
                      <th>amount</th>
                      <th>Category</th>

                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </table>
              </section>
              <ul className={"paginations"}>
                {pagins.map((item, index) => (
                  <li
                    className={`${"pagin-item"} ${
                      `${indexPagin === index + 1 ? "active" : ""}`
                    }`}
                  >
                    <Button
                      type={"text"}
                      title={index + 1}
                      onClick={() => {
                        setIndexPagin(index + 1);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </section>
        </section>
      </section>
    </main>
  );

}

export default FormProducts;
