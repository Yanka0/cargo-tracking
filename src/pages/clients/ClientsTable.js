import React, {useState} from 'react'
import {useTranslation} from "react-i18next";
import {BsFillTrashFill} from 'react-icons/bs';
import Button from '../../components/forms/button/Button';
import AddClientModal from './AddClientModal';
import Table from '../../components/tables/Table';

function ClientsTable() {
    const {t} = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            companyName: "Olya",
            status: "PRIVITE",
        },
        {
            companyName: "Yana",
            status: "LEGAL",
        },
    ]);


    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((item, index) => index !== targetIndex));
    };

    const onSubmit = (data) => {
        console.log(data);
        const {companyName, status} = data;
        rows.push({companyName, status});
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
                        name: t("companyName"),
                        renderer: (client) => client.companyName,
                    },
                    {
                        name: t("status"),
                        renderer: (client) => client.status,
                    },
                    {
                        name: t("actions"),
                        renderer: (index) => (
                            <span>
                <BsFillTrashFill className='deleteIcon' onClick={() => handleDeleteRow(index)}/>
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
                <AddClientModal
                    closeModal={() => {
                        setModalOpen(false);
                    }}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    )
}

export default ClientsTable