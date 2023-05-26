import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import Table from "../../components/tables/Table";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import Button from "../../components/forms/button/Button";
import StoragesModal from "./StoragesModal";
import { useEffect} from "react";
import axios from 'axios';


function StoragesTable(props) {

    const {t} = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchStorages();
    }, []);


    const fetchStorages = async () => {
        try {
            const response = await axios.get('/api/storages');
            if (response.status === 200) {
                setRows(response.data);
            } else {
                setError('Error fetching storages: ' + response.statusText);
            }
        } catch (error) {
            setError('Error fetching storages: ' + error.message);
        }
    };

    const deleteStorage = async (storageId) => {
        try {
            const response = await axios.delete(`/api/storages/${storageId}`);
            if (response.status === 200) {
                fetchStorages();
                window.location.reload(); // Перезагрузка страницы
            } else {
                setError('Error deleting storage: ' + response.statusText);
            }
        } catch (error) {
            setError('Error deleting storage: ' + error.message);
        }
    };

    const editStorage = async (storageId, updatedStorage) => {
        try {
            const response = await axios.put(`/api/storages/${storageId}`, updatedStorage);
            if (response.status === 200) {
                fetchStorages();
                window.location.reload(); // Перезагрузка страницы
            } else {
                setError('Error updating storage: ' + response.statusText);
            }
        } catch (error) {
            setError('Error updating storage: ' + error.message);
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/storages', data);
            if (response.status === 200) {
                setModalOpen(false);
                fetchStorages();
                window.location.reload(); // Перезагрузка страницы
            } else {
                setError('Error creating storage: ' + response.statusText);
            }
        } catch (error) {
            setError('Error creating storage: ' + error.message);
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
                        name: t("name"),
                        renderer: (storage) => storage.name,
                    },
                    {
                        name: t("storageAddress"),
                        renderer: (storage) => storage.address,
                    },
                    {
                        name: t("actions"),
                        renderer: (storage) => (
                            <span>
                        <BsFillTrashFill
                          className="deleteIcon"
                          onClick={() => deleteStorage(storage.id)}
                           />
                        <BsFillPencilFill
                          className="editIcon"
                          onClick={() => editStorage(storage.id, { name: 'New Name' })}
                           />
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
                <StoragesModal
                    closeModal={closeModal}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    )
    ;
}

export default StoragesTable;