import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import Table from "../../components/tables/Table";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import Button from "../../components/forms/button/Button";
import InvoicesModal from "./InvoicesModal";

function InvoicesTable(props) {
    const {t} = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            invoiceNumber: "Olya",
            invoiceCreationDate: "PRIVITE",
            invoiceVerifiedDate: "PRIVITE",
            invoiceStatus: "PRIVITE",
        },

    ]);
    const onSubmit = (data) => {
        console.log(data);
        closeModal();
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Table
                columns={[
                    {
                        name: t("invoiceNumber"),
                        renderer: (invoice) => invoice.number,
                    },
                    {
                        name: t("invoiceCreationDate"),
                        renderer: (invoice) => invoice.creationDate,
                    },
                    {
                        name: t("invoiceVerifiedDate"),
                        renderer: (invoice) => invoice.verifiedDate,
                    },
                    {
                        name: t("invoiceStatus"),
                        renderer: (invoice) => invoice.status,
                    },
                    {
                        name: t("actions"),
                        renderer: (index) => (<span>
                <BsFillTrashFill className='deleteIcon'/>
                                <BsFillPencilFill className='editIcon'/>
              </span>),
                    },]}
                rows={rows}
            />

            {rows.length == 0 && <p className="text-center h4">{t("noInfo")}</p>}
            <Button
                onClick={() => setModalOpen(true)}
                name={t("add")}
                className="tableBtn"
            />
            {modalOpen && (
                <InvoicesModal
                    closeModal={() => {
                        setModalOpen(false);
                    }}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    )
        ;
}

export default InvoicesTable;