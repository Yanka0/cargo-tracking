import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import Table from "../../components/tables/Table";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import Button from "../../components/forms/button/Button";
import CarsModal from "./CarsModal";
import axios from "axios";

function CarsTable(props) {
    const {t} = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCars();
    }, []);


    const fetchCars = async () => {
        try {
            const response = await axios.get('/api/cars');
            if (response.status === 200) {
                setRows(response.data);
            } else {
                setError('Error fetching cars: ' + response.statusText);
            }
        } catch (error) {
            setError('Error fetching cars: ' + error.message);
        }
    };

    const deleteCar = async (carId) => {
        try {
            const response = await axios.delete(`/api/cars/${carId}`);
            if (response.status === 200) {
                fetchCars();
                window.location.reload();
            } else {
                setError('Error deleting car: ' + response.statusText);
            }
        } catch (error) {
            setError('Error deleting car: ' + error.message);
        }
    };

    const editCar = async (carId, updatedCar) => {
        try {
            const response = await axios.put(`/api/storages/${carId}`, updatedCar);
            if (response.status === 200) {
                fetchCars();
                window.location.reload();
            } else {
                setError('Error updating car: ' + response.statusText);
            }
        } catch (error) {
            setError('Error updating car: ' + error.message);
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/car', data);
            if (response.status === 200) {
                setModalOpen(false);
                fetchCars();
                window.location.reload();
            } else {
                setError('Error creating car: ' + response.statusText);
            }
        } catch (error) {
            setError('Error creating car: ' + error.message);
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
                        name: t("carNumber"),
                        renderer: (car) => car.number,
                    },
                    {
                        name: t("carFuelConsumption"),
                        renderer: (car) => car.fuelConsumption,
                    },
                    {
                        name: t("carLoadCapacity"),
                        renderer: (car) => car.loadCapacity,
                    },
                    {
                        name: t("carType"),
                        renderer: (car) => car.carType,
                    },
                    {
                        name: t("actions"),
                        renderer: (car) => (<span>
                        <BsFillTrashFill
                            className="deleteIcon"
                            onClick={() => deleteCar(car.id)}
                        />
                        <BsFillPencilFill
                            className="editIcon"
                            onClick={() => editCar(car.id, {name: 'New Name'})}
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
                <CarsModal
                    closeModal={closeModal}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    )

}

export default CarsTable;