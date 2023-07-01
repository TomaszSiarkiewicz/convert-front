import {DeviceList} from "./DeviceList";

export const ListMain = ({devices}) =>{
    return(
        <div>
            {devices.map((device) =>(
                <DeviceList device={device}/>
            ))}
        </div>
    )
}