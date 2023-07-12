import { ErrorMessage, FastField } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment-jalaali";

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const months = [
  { id: 1, value: "Farvardin" },
  { id: 2, value: "Ordibehesht" },
  { id: 3, value: "Khordad" },
  { id: 4, value: "Tir" },
  { id: 5, value: "Mordad" },
  { id: 6, value: "Shahrivar" },
  { id: 7, value: "Mehr" },
  { id: 8, value: "Aban" },
  { id: 9, value: "azar" },
  { id: 10, value: "Day" },
  { id: 11, value: "Bahman" },
  { id: 12, value: "Esfand" },
];
const Date = ({ formik, name, placeholder, type }) => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [years, setYears] = useState([]); //chonke sal haei ke namayesh dade mishe static nabashe va dynamic bash
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    let now = moment();
    setYear(now.jYear());
    setMonth(now.jMonth());
    setDay(now.jDayOfYear());
  }, []);

  const handleShowDateConfig = () => {
    //baresi kone dar che sali hastim
    //va state years ro meqdar dehi kone

    let arrOfYears = [];
    for (let index = parseInt(year) - 100; index <= parseInt(year); index++) {
      arrOfYears = [...arrOfYears, index];
    }
    setYears(arrOfYears);
    setShowConfig(true);
  };

  const handleSetDateOfBirth = (e) => {
    // e.stopPropagation(); //ba tag valedet kari nadashte bash
    formik.setValues({
      ...formik.values,
      [name]: `${year}/${month}/${day}`,
    });
    setShowConfig(false);
  };

  return (
    <div className="mb-4 position-relative">
      <label htmlFor=""></label>
      <div
        onClick={() => {
          handleShowDateConfig();
        }}
      >
        <FastField
          name={name}
          type={type}
          placeholder={placeholder}
          className={`pointer input-group-text rounded-pill shadow-lg w-100`}
          disabled
        />
      </div>
      {showConfig ? (
        <div className="dateDiv rounded-pill row d-flex justify-content-center align-items-center">
          {/*icon 👍*/}
          <div
            className="col-1 text-success"
            onClick={() => {
              handleSetDateOfBirth();
            }}
          >
            <i className="fa-solid fa-thumbs-up pointer"></i>
          </div>
          <div className="col-3 p-0 m-0 ">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="selectBox form-select"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4 p-0 m-0">
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="selectBox form-select"
            >
              {months.map((m) => (
                <option value={m.id} key={m.id}>
                  {m.value}
                </option>
              ))}
            </select>
          </div>
          <div className=" col-2 p-0 m-0">
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="selectBox form-select"
            >
              {days.map((d) => (
                <option value={d} key={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      <div>
        <ErrorMessage
          name={name}
          render={(d) => <small className="smallFont">{d}</small>}
        />
      </div>
    </div>
  );
};

export default Date;
