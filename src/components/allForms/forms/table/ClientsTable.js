import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import Button from '../../../UI/button/Button';
import ClientsInfoModal from './ClientsInfoModal';
import Table from './Table';

function ClientsTable() {
const { t } = useTranslation();
const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [rowToEditIndex, setRowToEditIndex] = useState(null);
  const [rows, setRows] = useState([
    {
      name: "Olya",
      status: "PRIVITE",
    },
    {
      name: "Yana",
      status: "LEGAL",
    },
  ]);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((item, index) => index !== targetIndex));
  };
  const handleEditRow = (targetIndex) => {
    setRowToEditIndex(targetIndex);
    setRowToEdit(rows[targetIndex]);
    setModalOpen(true);
  };
  const onSubmit = (data) => {
    if(rowToEdit === null){
     createUser(data); 
    } else
    updateUser(data);
  };
  const createUser = (data) => {
    setRows([...rows, data]);
    closeModal();
  };
  const updateUser = (data) => {
    setRows(
      rows.map((currRow, idx) => {
        if (idx !== rowToEditIndex) return currRow;
        return data;
      })
    );
    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
    setRowToEdit(null);
  };
  return (
    <div>
      <Table
        columns={[
          {
            name: t("name"),
            renderer: (user) => user.name,
          },
          {
            name: t("status"),
            renderer: (user) => user.status,
          },
          {
            name: t("actions"),
            renderer: (user, index) => (
              <span>
                <BsFillTrashFill className= 'deleteIcon' onClick={() => handleDeleteRow(index)} />
                <BsFillPencilFill className= 'editIcon' onClick={() => handleEditRow(index)} />
              </span>
            ),
          },
        ]}
        rows={rows}
      />

      {rows.length == 0 && <p className="text-center h4">{t("noInfo")}</p>}
      <Button
        onClick={() => setModalOpen(true)}
        name={t("add")}
        className="tableBtn"
      />
      {modalOpen && (
        <ClientsInfoModal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={onSubmit}
          rowToEdit={rowToEdit}
        />
      )}
    </div>
  )
}

export default ClientsTable