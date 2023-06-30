import {useState} from "react";
import {Device} from "./Device";
import axios from "axios";
import fileDownload from 'js-file-download'

export const NewDevice = () => {
    const [device, setDevice] = useState({
        "name": null,
        "date": null,
        "price": null
    })
    const [devices, setDevices] = useState([])
    const onEditField = (key, value) => {
        setDevice({
            ...device,
            [key]: value,
        })
    };
    const handleSubmitDevice = () => {
        if (device.name != null && device.date != null && device.price != null) {
            devices.push(device);
            setDevice({
                "name": null,
                "date": null,
                "price": null
            });
        }else {
            alert("Uzupełnij nazwę, cenę i datę")
        }
    }
    const handleInvoiceDownload = async () => {
        const response = (await axios.post('http://localhost:8080/items', devices));
        handleDownload('http://localhost:8080/invoice', 'faktura.xml')
    }
    const handleDownload = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }
    return (
        <div className="newDevice-container">
            <div className="newDevice-container-input">
                <input
                    className="name"
                    placeholder="nazwa urządzenia..."
                    onChange={(e) => onEditField("name", e.target.value)}
                />
                <input
                    type="number"
                    className="price"
                    placeholder="cena w USD..."
                    onChange={(e) => onEditField("price", e.target.value)}
                />
                <input
                    type="date"
                    className="date"
                    placeholder="data..."
                    onChange={(e) => onEditField("date", e.target.value)}
                />
                <button
                    className="submit-device"
                    onClick={() => handleSubmitDevice()}
                >submit
                </button>
            </div>
            <div className="newDevice-container-list">
                {devices.map((device) => (
                    <Device
                        device={device}
                    />
                ))}
            </div>
            <button
                onClick={() => handleInvoiceDownload()}
            >pobierz fakturę</button>
        </div>
    )
}