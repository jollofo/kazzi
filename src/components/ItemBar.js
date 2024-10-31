import Image from "next/image"
import Container from "./Container"
import car from "@/images/car.svg"
import clothes from "@/images/clothes.svg"
import groceries from "@/images/groceries.svg"
import scissors from "@/images/scissors.svg"
import videogames from "@/images/controller.svg"

export default function ItemBar() {
    const businesses = [
        {name: "Car Wash", pic: car},
        {name: "Clothes", pic: clothes},
        {name: "Groceries", pic: groceries},
        {name: "Scissors", pic: scissors},
        {name: "Arcades", pic: videogames}
    ]

    return (
        <Container classname="my-16 grid grid-flow-col text-xl place-items-center">
            {businesses.map((item, i) => (
                <div key={i} className="place-items-center">
                    <Image width={100} height={100} src={item.pic}/>
                    <p>{item.name}</p>
                </div>
            ))}
        </Container>
    )
}