import React from "react";
import { useTranslation } from "react-i18next";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import './Table.scss'
function Table({ rows, deleteRow }) {
  const { t } = useTranslation();

  return (
  <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>{t("name")}</th>
            <th>{t("surname")}</th>
            <th>{t("patronymic")}</th>
            <th>{t("bornDate")}</th>
            <th>{t("passportNum")}</th>
            <th>{t("issuedBy")}</th>
            <th>{t("town")}</th>
            <th>{t("street")}</th>
            <th>{t("house")}</th>
            <th>{t("flat")}</th>
            <th>{t("email")}</th>
            <th>{t("login")}</th>
            <th>{t("password")}</th>
            <th>{t("confirmPassword")}</th>
            <th>{t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.patronymic}</td>
                <td>{item.bornDate}</td>
                <td>{item.passportNum}</td>
                <td>{item.issuedBy}</td>
                <td>{item.town}</td>
                <td>{item.street}</td>
                <td>{item.house}</td>
                <td>{item.flat}</td>
                <td>{item.email}</td>
                <td>{item.login}</td>
                <td>{item.password}</td>
                <td>{item.confirmPassword}</td>
                <td>
                  <span>
                    <BsFillTrashFill onClick={()=> deleteRow(index)}/>
                    
                  </span>
                </td>
              </tr>
            );
          })}
         
        </tbody>
      </table>
    </div>
  );
}

export default Table;
