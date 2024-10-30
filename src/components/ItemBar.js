import Image from "next/image"
import Container from "./Container"
import car from "@/images/car.svg"
// import clothes from "@/images/clothes.png"
// import groceries from "@/images/groceries.png"
// import scissors from "@/images/scissors.png"
// import videogames from "@/images/video-games.png"

export default function ItemBar() {
    const businesses = [
        {name: "car", pic: car},
        {name: "clothes", pic: clothes},
        {name: "groceries", pic: groceries},
        {name: "scissors", pic: scissors},
        {name: "video-games", pic: videogames}
    ]

    return (
        <Container classname="grid grid-flow-row">
            {businesses.map((item, i) => (
                <div key={i} classaName="p-2">
                    <Image className="stroke-white" width={100} height={100} src={item.pic}/>
                    <p>{item.name}</p>
                </div>
            ))}
        </Container>
    )
}