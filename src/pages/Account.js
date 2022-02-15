import React from "react";

import {
  Scheduler,
  TimelineView,
  DayView,
  MonthView,
} from "@progress/kendo-react-scheduler";
import { guid } from "@progress/kendo-react-common";
import { Navigate } from "react-router-dom";

import "@progress/kendo-theme-default/dist/all.css";

const Account = () => {
  const [data, setData] = React.useState([]);

  const handleDataChange = ({ created, updated, deleted }) => {
    setData((old) =>
      old
        .filter(
          (item) =>
            deleted.find((current) => current.id === item.id) === undefined
        )
        .map(
          (item) => updated.find((current) => current.id === item.id) || item
        )
        .concat(
          created.map((item) =>
            Object.assign({}, item, {
              id: guid(),
            })
          )
        )
    );
  };
  let formValue = localStorage.getItem("register");

  if (formValue === "false") {
    return <Navigate to="/" />;
  } else {
    formValue = JSON.parse(formValue);
  }
  return (
    <div>
      <p style={{ textAlign: "center", margin: "1em 0", fontSize: "1.7rem" }}>
        Welcome {formValue.name} to your task scheduler
      </p>
      <Scheduler
        data={data}
        onDataChange={handleDataChange}
        editable={{
          add: true,
          remove: true,
          drag: true,
          resize: true,
          select: true,
          edit: true,
        }}
      >
        <TimelineView />
        <DayView numberOfDays={2} />
        <MonthView />
      </Scheduler>
    </div>
  );
};

export default Account;
