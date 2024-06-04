import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./constants";
import { DataGrid } from "@mui/x-data-grid";
import { Snackbar, Stack, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import AddCar from "./AddCar";
import EditCar from "./EditCar";

function CarList() {
  // 서버로부터 전체 car 목록을 받아와서 저장
  const [cars, setCars] = useState([]);
  // 알림 메시지 상태
  const [open, setOpen] = useState(false);

  // 시작하면 1번 서버에 요청
  useEffect(() => {
    fetchCars();
  }, []);

  // 서버에 Car 목록 요청 함수
  const fetchCars = () => {
    fetch(SERVER_URL + "api/cars")
      // response는 헤더+json를 가진 js객체
      // response.json()는 json만 가진 js객체
      .then((response) => response.json())
      // data = response.json()
      .then((data) => setCars(data._embedded.cars))
      .catch((err) => console.error(err));
  };

  // 삭제 후 서버에 다시 목록 요청
  const onDelClick = (url) => {
    if (window.confirm("Are you sure to delete?")) {
      fetch(url, { method: "DELETE" })
        .then((response) => {
          // console.log(response);
          if (response.ok) {
            fetchCars();
            setOpen(true);
          } else {
            alert("Something went wrong");
          }
        })
        .catch((err) => console.error(err));
    }
  };
  
  // car 객체 서버로 추가 요청
  const addCar = (car) => {
    fetch(SERVER_URL + 'api/cars', 
      {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(car)
      }
    )
    .then(response => {
      if(response.ok){
        // 추가 성공이면, 서버로부터 목록 재요청
        fetchCars();
      }else{
        alert('Something went wrong');
      }
    })
    .catch(err => console.error(err));
  }

  // 특정 항목 갱신 시 => PATCH
  // 전체 항목 갱신 시 => PUT
  // car 객체 서버로 추가 요청
  const updateCar = (car, link) => {
    fetch(link, 
      {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(car)
      }
    )
    .then(response => {
      if(response.ok){
        // 갱신 성공이면, 서버로부터 목록 재요청
        fetchCars();
      }else{
        alert('Something went wrong');
      }
    })
    .catch(err => console.error(err));
  }

  // DataGrid의 헤더에서 사용할 정보
  const columns = [
    // field가 json데이터의 명칭과 같아야 함
    { field: "brand", headerName: "Brand", width: 200 },
    { field: "model", headerName: "Model", width: 200 },
    { field: "color", headerName: "Color", width: 200 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { 
      field: "_links.car.href",
      headerName: "",
      sortable: false,
      filterable: false,
      renderCell: row => <EditCar data={row} updateCar={updateCar}/>
    },
    {
      field: "_links.self.href",
      headerName: "",
      sortable: false,
      filterable: false,
      renderCell: (row) => (
        // <button onClick={() => onDelClick(row.id)}>Delete</button>
        <IconButton onClick={()=>onDelClick(row.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Stack mt={2} mb={2}>
        <AddCar addCar={addCar}/>
      </Stack>
      <div style={{ height: 500, width: "100%" }}>
        {/* getRowId === row.id */}
        <DataGrid
          rows={cars}
          columns={columns}
          disableRowSelectionOnClick={true}
          getRowId={(row) => row._links.self.href}
        />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Car deleted"
        />
      </div>
    </React.Fragment>
  );
}

export default CarList;
