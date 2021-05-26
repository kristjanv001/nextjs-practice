import { ReactNode } from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {

  return (
    <div>
      <NavBar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}