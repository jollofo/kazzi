import Container from "@/components/Container";
import ItemBar from "@/components/ItemBar";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Container>
        <ItemBar />
      </Container>
    </>
  );
}
