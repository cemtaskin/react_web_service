import { useState, useEffect } from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const StudentList = () => {
  const [studenList, setStudentList] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://v1.nocodeapi.com/cemtaskin/google_sheets/gpRIIHoyOvydhbER/?tabId=Sayfa1"
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
  };
  return (
    <div>
      <div>Student List</div>
      <Button icon={<SearchOutlined />} onClick={getData}>
        Search
      </Button>
    </div>
  );
};

export default StudentList;
