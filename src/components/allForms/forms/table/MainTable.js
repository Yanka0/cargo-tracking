import React, { useState } from "react";
import Modal from "./Modal";
import Table from "./Table";
import { useTranslation } from "react-i18next";
import Button from "../../../UI/button/Button";
import "./MainTable.scss";
function MainTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      name: "Yana",
      surname: "Savchenko",
      patronymic: "Victorovna",
      bornDate: "2004-07-14",
      passportNum: "MP9009009",
      issuedBy: "hhhh",
      town: "Minsk",
      street: "Lugovaya",
      house: "17",
      flat: "-",
      email: "yana.savchenko1407@gmail.com",
      login: "Yanka0",
      password: "qwerty",
      confirmPassword: "qwerty",
    },
    {
      name: "Yana",
      surname: "Savchenko",
      patronymic: "Victorovna",
      bornDate: "2004-07-14",
      passportNum: "MP9009009",
      issuedBy: "hhhh",
      town: "Minsk",
      street: "Lugovaya",
      house: "17",
      flat: "-",
      email: "yana.savchenko1407@gmail.com",
      login: "Yanka0",
      password: "qwerty",
      confirmPassword: "qwerty",
    },
    {
      name: "Yana",
      surname: "Savchenko",
      patronymic: "Victorovna",
      bornDate: "2004-07-14",
      passportNum: "MP9009009",
      issuedBy: "hhhh",
      town: "Minsk",
      street: "Lugovaya",
      house: "17",
      flat: "-",
      email: "yana.savchenko1407@gmail.com",
      login: "Yanka0",
      password: "qwerty",
      confirmPassword: "qwerty",
    }
    
    
  ]);
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((item, index) => index !== targetIndex));
  };

  const onSubmit = (data) => {
    setRows([...rows, data]);
    closeModal();
  };
  const { t } = useTranslation();

  return (
    <div>
      <Table rows={rows} deleteRow={handleDeleteRow} />
      <Button
        onClick={() => setModalOpen(true)}
        name={t("add")}
        className="tableBtn"
      />
      {modalOpen && <Modal closeModal={closeModal} onSubmit={onSubmit} />}
    </div>
  );
}

export default MainTable;
