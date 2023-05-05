import React, { useState } from "react";
import AddUserModal from "./AddUserModal";
import Table from "./Table";
import { useTranslation } from "react-i18next";
import Button from "../../../UI/button/Button";
import "./MainTable.scss";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

function UsersTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState('');
  const onSubmit = (data) => {
    console.log(data);
    setRows([...rows, data]);
    closeModal();
  };

  const closeModal = () => {
    setRowToEdit('')
    setModalOpen(false);
  };

  const [rows, setRows] = useState([
    {
      name: "Olya",
      surname: "Savchenko",
      patronymic: "Victorovna",
      bornDate: "2004-07-14",
      passportNum: "MP9009009",
      issuedBy: "hhhh",
      town: "Minsk",
      street: "Lugovaya",
      house: "17",
      flat: "4",
      email: "yana.savchenko1407@gmail.com",
      login: "Yanka0",
      role: "USER",
      clientId: 1,
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
      flat: "7",
      email: "yana.savchenko1407@gmail.com",
      login: "Yanka0",
      role: "ADMIN",
      clientId: 2,
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
      flat: "9",
      email: "yana.savchenko1407@gmail.com",
      login: "Yanka0",
      role: "DRIVER",
      clientId: 3,
    },
  ]);
  
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((item, index) => index !== targetIndex));
  };
  const handleEditRow = (targetIndex) => {
    setRowToEdit(rows[targetIndex]);
    setModalOpen(true);
  };
  const onChange = (e) => {
    setRowToEdit({...rowToEdit,[e.target.name]: e.target.value})
  }
  console.log(rowToEdit);
  const { t } = useTranslation();

  return (
    <div>
      <Table
        columns={[
          {
            name: t("name"),
            renderer: (user) => user.name,
          },
          {
            name: t("surname"),
            renderer: (user) => user.surname,
          },
          {
            name: t("patronymic"),
            renderer: (user) => user.patronymic,
          },
          {
            name: t("bornDate"),
            renderer: (user) => user.bornDate,
          },
          {
            name: t("passportNum"),
            renderer: (user) => user.passportNum,
          },
          {
            name: t("issuedBy"),
            renderer: (user) => user.issuedBy,
          },
          {
            name: t("town"),
            renderer: (user) => user.town,
          },
          {
            name: t("street"),
            renderer: (user) => user.street,
          },
          {
            name: t("house"),
            renderer: (user) => user.house,
          },
          {
            name: t("flat"),
            renderer: (user) => user.flat,
          },
          {
            name: t("email"),
            renderer: (user) => user.email,
          },
          {
            name: t("login"),
            renderer: (user) => user.login,
          },
          {
            name: t("role"),
            renderer: (user) => user.role,
          },
          {
            name: t("clientId"),
            renderer: (user) => user.clientId,
          },
          {
            name: t("actions"),
            renderer: (user, index) => (
              <span>
                <BsFillTrashFill onClick={() => handleDeleteRow(index)} />
                <BsFillPencilFill onClick={() => handleEditRow(index)} />
              </span>
            ),
          },
        ]}
        rows={rows}
      />
      <Button
        onClick={() => setModalOpen(true)}
        name={t("add")}
        className="tableBtn"
      />
      {modalOpen && (
        <AddUserModal
          closeModal={closeModal}
          onSubmit={onSubmit}
          rowToEdit={rowToEdit}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default UsersTable;
