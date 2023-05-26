import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import Table from "../../components/tables/Table";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import Button from "../../components/forms/button/Button";
import InvoicesModal from "./InvoicesModal";
import axios from "axios";

function InvoicesTable(props) {
    const {t} = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchInvoices();
    }, []);


    const fetchInvoices = async () => {
        try {
            const response = await axios.get('/api/invoices');
            if (response.status === 200) {
                setRows(response.data);
            } else {
                setError('Error fetching invoices: ' + response.statusText);
            }
        } catch (error) {
            setError('Error fetching invoices: ' + error.message);
        }
    };

    const deleteInvoice = async (invoiceId) => {
        try {
            const response = await axios.delete(`/api/invoices/${invoiceId}`);
            if (response.status === 200) {
                fetchInvoices();
                window.location.reload();
            } else {
                setError('Error deleting invoice: ' + response.statusText);
            }
        } catch (error) {
            setError('Error deleting invoice: ' + error.message);
        }
    };

    const editInvoice = async (invoiceId, updatedInvoice) => {
        try {
            const response = await axios.put(`/api/invoices/${invoiceId}`, updatedInvoice);
            if (response.status === 200) {
                fetchInvoices();
                window.location.reload();
            } else {
                setError('Error updating invoice: ' + response.statusText);
            }
        } catch (error) {
            setError('Error updating invoice: ' + error.message);
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/invoices', data);
            if (response.status === 200) {
                setModalOpen(false);
                fetchInvoices();
                window.location.reload();
            } else {
                setError('Error creating invoice: ' + response.statusText);
            }
        } catch (error) {
            setError('Error creating invoice: ' + error.message);
        }
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
                        renderer: (invoice) => ( <span>
                        <BsFillTrashFill
                            className="deleteIcon"
                            onClick={() => deleteInvoice(invoice.id)}
                        />
                        <BsFillPencilFill
                            className="editIcon"
                            onClick={() => editInvoice(invoice.id, {name: 'New Name'})}
                        />
                         </span>),
                    },]}
                rows={rows}
            />

            {rows.length === 0 && <p className="text-center h4">{t("noInfo")}</p>}
            <Button
                onClick={() => setModalOpen(true)}
                name={t("add")}
                className="tableBtn"
            />
            {modalOpen && (
                <InvoicesModal
                    closeModal={closeModal}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    )
        ;
}

export default InvoicesTable;