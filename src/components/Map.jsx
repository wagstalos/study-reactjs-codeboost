import CarMap from "./CarMap"

const cars = [
    'Carro ',
    'Carro ',
    'Carro ',
    'Carro ',
    'Carro ',
    'Carro ',
    'Carro ',
    'Carro '
]

export default function Map(){
    return(
        <div>
            <h2>MAP </h2>

            <ul>
                {
                    cars.map((car,index) => (
                        <CarMap key={index} nameCar={car} index={`0${index+1}`}/>
                    ))
                }
            </ul>
        </div>
    )
}