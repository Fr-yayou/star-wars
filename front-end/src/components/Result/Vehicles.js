import React from "react"
import styleVehicle from "../../styles/Vehicle.module.css"


const Vehicles = (props) => {
    if(props.location){
        let dataString = JSON.parse(props.location.query.data)

        return(
        <div className={styleVehicle.extraContainer}>
            <div className={styleVehicle.containerPeople}>
                <h1 className={styleVehicle.title}>{dataString.name}</h1>
                <div className={styleVehicle.container}>
                    <div className={styleVehicle.containerProperty}>
                        <p>Cargo capacity:</p>
                        <p>consumables:</p>
                        <p>Cost:</p>
                        <p>Crew:</p>
                        <p>Length:</p>
                        <p>Manufacturer:</p>
                        <p>Max atmosphering speed:</p>
                        <p>Model:</p>
                        <p>Passengers:</p>
                        <p>Vehicle class:</p>
                    </div>
                    <div className={styleVehicle.containerDetail}>
                        <p>{dataString.cargo_capacity}</p>
                        <p>{dataString.consumables}</p>
                        <p>{dataString.cost_in_credits}</p>
                        <p>{dataString.crew}</p>
                        <p>{dataString.length}</p>
                        <p>{dataString.manufacturer}</p>
                        <p>{dataString.max_atmosphering_speed}</p>
                        <p>{dataString.model}</p>
                        <p>{dataString.passengers}</p>
                        <p>{dataString.vehicle_class}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className={styleVehicle.extraContainer}>
            <div className={styleVehicle.containerPeople}>
                <h1 className={styleVehicle.title}>{props.vehicle.name}</h1>
                <div className={styleVehicle.container}>
                    <div className={styleVehicle.containerProperty}>
                        <p>Cargo capacity:</p>
                        <p>consumables:</p>
                        <p>Cost:</p>
                        <p>Crew:</p>
                        <p>Length:</p>
                        <p>Manufacturer:</p>
                        <p>Max atmosphering speed:</p>
                        <p>Model:</p>
                        <p>Passengers:</p>
                        <p>Vehicle class:</p>
                    </div>
                    <div className={styleVehicle.containerDetail}>
                        <p>{props.vehicle.cargo_capacity}</p>
                        <p>{props.vehicle.consumables}</p>
                        <p>{props.vehicle.cost_in_credits}</p>
                        <p>{props.vehicle.crew}</p>
                        <p>{props.vehicle.length}</p>
                        <p>{props.vehicle.manufacturer}</p>
                        <p>{props.vehicle.max_atmosphering_speed}</p>
                        <p>{props.vehicle.model}</p>
                        <p>{props.vehicle.passengers}</p>
                        <p>{props.vehicle.vehicle_class}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Vehicles