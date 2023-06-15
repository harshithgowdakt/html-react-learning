import './App.css'
import { Link } from "react-router-dom"

export function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <h1>my website</h1>
    </div>
  )
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <h1>about us</h1>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <h1> contact us</h1>
    </div>
  )
}

export function App() {
  return (
    <h1>App</h1>
  )
}
