import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import Table from "../../components/tables/Table";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import Button from "../../components/forms/button/Button";
import CarsModal from "./CarsModal";

function CarsTable(props) {
    const {t} = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            carNumber: "Olya",
            carFuelConsumption: "PRIVITE",
            carLoadCapacity:'2',
            carType:'h'
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
                        name: t("carNumber"),
                        renderer: (client) => client.carNumber,
                    },
                    {
                        name: t("carFuelConsumption"),
                        renderer: (client) => client.carFuelConsumption,
                    },
                    {
                        name: t("carLoadCapacity"),
                        renderer: (client) => client.carLoadCapacity,
                    },
                    {
                        name: t("carType"),
                        renderer: (client) => client.carType,
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
                <CarsModal
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

export default CarsTable;