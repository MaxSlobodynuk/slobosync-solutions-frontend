import React from "react";
import css from "./Planner.module.css";
import plannerData from "../../../planner.json";
const Planner = () => {
  const { data } = plannerData;

  return (
    <section className={css.container}>
      <div className={css.planner}>
        <div></div>

        {data.days.map((day, index) => (
          <div key={index} className={css.day}>
            {day}
          </div>
        ))}

        {data.hours.map((hour, index) => (
          <div key={index} className={css.containerSlot}>
            <div className={css.time}>{hour}</div>
            <div className={css.slot}></div>
            <div className={css.slot}></div>
            <div className={css.slot}></div>
            <div className={css.slot}></div>
            <div className={css.slot}></div>
            <div className={css.slot}></div>
            <div className={css.slot}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Planner;
