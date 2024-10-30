import Container from "./Container"

export default function NavBar() {
  const buttonStyle = "p-2 hover:border-b-2 hover:border-white hover:translate-y-[-0.3rem]"
  return (
    <Container>
      <section className="grid grid-cols-3 place-items-center my-8 text-4xl">
        <div>
          <h1>Kazzi</h1>
        </div>
        <div>
          <h2>Feed</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 text-3xl">
          <button className={`${buttonStyle}`}>Sign Up</button>
          <button className={`${buttonStyle}`}>Login</button>
        </div>
      </section>
    </Container>
  );
}
