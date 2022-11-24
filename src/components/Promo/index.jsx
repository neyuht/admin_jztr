import FormDataItem from "../../scripts/components/form-data-item";
import Input from "../../scripts/components/input";
import Button from "../../scripts/components/button";
import Select from "../../scripts/components/select";
import PromoItem from "../../scripts/components/l-promo-item";
import PopUpPromo from "./promo-overlay";
import { useEffect, useState } from "react";
import {validateDataForm } from "../../scripts/helpers/validation";
import axiosClient from '../../scripts/helpers/config'

import '../../styles/main.css';

const percents = new Array(101).fill(1).map((item, index) => ({
  title: index,
  value: index,
}));

const statuss = new Array(2).fill(1).map((item, index) => ({
  title: `${Boolean(index)}`,
  value: `${Boolean(index)}`,
}));

const size = 8;

function Promo() {
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState(0);
  const [amount, setAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [expires, setExpires] = useState("");
  const [status, setStatus] = useState(true);
  const [filter, setFilter] = useState("");
  const [indexPagin, setIndexPagin] = useState(1);
  const [promotions, setPromotions] = useState([]);
  const [pagins, setPagins] = useState([1]);
  const [timer, setTimer] = useState("");
  const [overlay, setOverlay] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    const obj = {
      code,
      percent: parseInt(percent),
      amount,
      maxAmount,
      expire: "24-11-2022",
      status,
    };

    const valid = validateDataForm(obj);
    if (valid) {
      axiosClient.post(`${process.env.REACT_APP_URL}/promotion`, {
        id: 0,
        code: "string",
        percent: 0,
        amount: 0,
        maxAmount: 0,
        status: true,
        type: 0,
        ...obj,

      }).then(res => {
        console.log("Success");
      })
      .catch(err => {
        console.log(err);
      })
      const _temps = [...promotions, obj];
      const sizePagin =
        _temps.length % size === 0 ? _temps.length / size : parseInt(_temps.length / size) + 1;
      const _tempsPagin = new Array(sizePagin).fill(1);
      setPagins(_tempsPagin);
      setPromotions(_temps);
      setCode("");
      setPercent(0);
      setAmount("");
      setMaxAmount("");
      setExpires("");
      setStatus(true);
    }
  };

  const onSearch = async (e) => {
    if (timer) clearTimeout(timer);
    const _timer = setTimeout(() => {
      console.log(e.target.value);
    }, 600);
    setTimer(_timer);
    setFilter(e.target.value);
  };

  const openSetting = async(event, id) => {
    const {data} = await axiosClient.get(`${process.env.REACT_APP_URL}/promotion/${id}`)
    setOverlay(data);
    // console.log(data);
  };


useEffect(() => {
  axiosClient.get(`${process.env.REACT_APP_URL}/promotion`)
          .then(response => {
            console.log(response.data);
            setPromotions(response.data)
          }).catch(err => {
            console.log(err);
          })
},[])

  return (
    <section className={"promo-wrapper"}>
      <h2 className={"title"}>Hello World</h2>
      <section className={"promo-main"}>
        <section>
          <form action="#" className={"form-wrapper"} onSubmit={onSubmit}>
            <h2 className={"heading"}>add promotion</h2>
            <section className={"form-data"}>
              <FormDataItem label="code" id="code">
                <Input
                  type="text"
                  name="code"
                  value={code}
                  placeholder="Enter code.."
                  onChange={(event) => {
                    setCode(event.target.value);
                  }}
                />
              </FormDataItem>
              <FormDataItem label="percent" id="percent">
                <Select
                  datas={percents}
                  name="percent"
                  value={percent}
                  onChange={(event) => {
                    setPercent(event.target.value);
                  }}
                />
              </FormDataItem>
              <FormDataItem label="status" id="status">
                <Select
                  datas={statuss}
                  name="status"
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value);
                  }}
                />
              </FormDataItem>
              <FormDataItem label="amount" id="amount">
                <Input
                  type="text"
                  name="amount"
                  value={amount}
                  placeholder="Enter amount.."
                  onChange={(event) => {
                    setAmount(event.target.value);
                  }}
                />
              </FormDataItem>
              <FormDataItem label="max amount" id="maxAmount">
                <Input
                  type="text"
                  name="maxAmount"
                  value={maxAmount}
                  placeholder="Enter max amount.."
                  onChange={(event) => {
                    setMaxAmount(event.target.value);
                  }}
                />
              </FormDataItem>
              <FormDataItem label="expire" id="expire">
                <Input
                  type="date"
                  name="expire"
                  value={expires}
                  onChange={(event) => {
                    setExpires(event.target.value);
                  }}
                />
              </FormDataItem>
            </section>
            <Button type="submit" title="submit" onClick={onSubmit} />
          </form>
        </section>
        <section>
          <section className={"list-promo"}>
            <section className={"filter-promo"}>
              <h2 className="heading">list promotion</h2>
              <Input
                type={"text"}
                name="search"
                value={filter}
                placeholder="Enter promotion"
                onChange={onSearch}
              />
            </section>
            <section className={"table-promo"}>
              <table>
                <thead>
                  <tr>
                    <th>code</th>
                    <th>percent</th>
                    <th>amount</th>
                    <th>max amount</th>
                    <th>expires</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {promotions.map((promotion, index) => {
                    if (indexPagin * size - size <= index && index < size * indexPagin) {
                      return (
                        <PromoItem
                          id={promotion.id}
                          code={promotion.code}
                          percent={promotion.percent}
                          amount={promotion.amount}
                          maxAmount={promotion.maxAmount}
                          expire={promotion.expire}
                          status={promotion.status + ""}
                          onClick={openSetting}
                        />
                      );
                    }
                    return <></>;
                  })}
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
      {overlay && <PopUpPromo {...overlay} onClick={setOverlay} />}
    </section>
  );
}

export default Promo;
