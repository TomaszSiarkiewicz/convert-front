import {ListHeader} from "./ListHeader";
import {ListMain} from "./ListMain";
import {useState} from "react";
import axios from "axios";

export const ListContainer = () => {
    const [devices, setDevices] = useState([])

    const handleLoadClick = async () => {
        setDevices((await axios.get('http://ec2-54-93-52-240.eu-central-1.compute.amazonaws.com:8080/search/all')).data)
    }

    if (devices.length > 0) {
        return (
            <div>
                <ListHeader
                    setDevices={setDevices}
                />
                <ListMain
                devices={devices}
                />
            </div>)
    } else {
        return (
            <div>
                <button onClick={handleLoadClick}>załaduj zakupione urządzenia</button>
            </div>
        )
    }


}