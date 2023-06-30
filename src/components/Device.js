export const Device = ({device}) => {

    return (
        <div>
            <strong>{device.name}</strong>
            <small>{device.price} {device.date}</small>
        </div>
    )
}