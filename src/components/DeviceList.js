export const DeviceList = ({device}) => {

    return(
        <div className="device-listed">
            <strong className="device-listed-element">{device.name}</strong>
            <small className="device-listed-element">{device.date}</small>
            <small className="device-listed-element">{device.priceUsd} usd</small>
            <small className="device-listed-element">{device.pricePln}pln</small>
        </div>
    )
}