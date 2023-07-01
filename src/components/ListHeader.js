import {useState} from "react";
import axios from "axios";

export const ListHeader = ({setDevices}) => {
    const [date, setDate] = useState()
    const [name, setName] = useState('')
    const handleLoadClick = async () => {
        setDevices((await axios.get('http://ec2-54-93-52-240.eu-central-1.compute.amazonaws.com:8080/search/all')).data)
    }
    const searchByDate = async () => {
        let data = (await axios.get('http://ec2-54-93-52-240.eu-central-1.compute.amazonaws.com:8080/search/date/' + date)).data;
        setDevices(data)
    }
    const searchByName = async () => {
        let data = (await axios.get('http://ec2-54-93-52-240.eu-central-1.compute.amazonaws.com:8080/search/name/' + name)).data;
        setDevices(data)
    }
    return (

        <div className="list-header">
            <button
                onClick={handleLoadClick}>załaduj wszystkie urządzenia</button>
            <div>
                <button
                    onClick={searchByDate}>wyszukaj po dacie</button>
                <input
                    type="date"
                    className="search"
                    max={(new Date).toISOString().slice(0,10)}
                    placeholder="data..."
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div>
                <button
                    onClick={searchByName}>wyszukaj gdzie nazwa zawiera:</button>
                <input
                    className="search"
                    placeholder="nazwa..."
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    )
}