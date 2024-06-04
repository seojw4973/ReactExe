import React, { useState } from "react";
import {  Dialog,  DialogActions,  DialogContent,  DialogTitle,} from "@mui/material";
import { Button, TextField, Stack, IconButton } from "@mui/material";
import { EditIcon } from '@mui/icons-material';


function EditCar(props){
    const { data, updateCar } = props;
    const [open, setOpen] = useState(false); // 수정 대화상자 열림 여부
    const [car, setCar] = useState({  // 자동차 정보 입력
      // 자동차 정보 입력
      brand: "",
      model: "",
      color: "",
      year: "",
      prica: "",
    });

  // 입력 모달 창 열림
  const handleClickOpen = () => {
    setCar({
        brand: data.row.brand,
        model: data.row.model,
        color: data.row.color,
        year: data.row.year,
        price: data.row.price
    })
    setOpen(true);
  };

  // 입력 모달 창 닫힘
  const handleClose = () => {
    setOpen(false);
  };

  // 모달창 내에서 자동차 정보 입력시, 해당 필드 정보 갱신
  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  // 자동차를 저장하고 모달 폼을 닫음
  const handleSave= () => {
    handleClose();
  }


  return (
    <div>
      <button onClick={handleClickOpen}>Edit Car</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange} />
            <br />
            <input placeholder="Model" name="model" value={car.model} onChange={handleChange} />
            <br />
            <input placeholder="Color" name="color" value={car.color} onChange={handleChange} />
            <br />
            <input placeholder="Year" name="year" value={car.year} onChange={handleChange} />
            <br />
            <input placeholder="Price" name="price" value={car.price} onChange={handleChange} />
            <br />
          </Stack>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditCar;