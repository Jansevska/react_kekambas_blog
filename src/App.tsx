import Instructors from "./components/Instructors"
import Header from "./components/Header"
import Container from "react-bootstrap/esm/Container"
import Posts from "./components/Posts"

export default function App() {
  const instructors = {
    senior:'Brian',
    associate:"Sarah"
  }

  return (
    <Container data-bs-theme='secondary'>
    <Header />
    <h1>Kekambas Blog</h1>
    <Instructors associate={ instructors.associate } senior={ instructors.senior }/>
    <Posts />
    </Container>
  )
}


