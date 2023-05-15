import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import Table from "../../components/tables/Table";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import Button from "../../components/forms/button/Button";
import ProductsWriteOffsModal from "./ProductsWriteOffsModal";

function ProductsWriteOffsTable(props) {
    const {t} = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            productWriteOffsAmount: "Olya",
            productWriteOffsStatus: "PRIVITE",
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
                        name: t("productWriteOffsAmount"),
                        renderer: (client) => client.productWriteOffsAmount,
                    },
                    {
                        name: t("productWriteOffsStatus"),
                        renderer: (client) => client.productWriteOffsStatus,
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
                <ProductsWriteOffsModal
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

export default ProductsWriteOffsTable;