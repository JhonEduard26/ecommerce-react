import { Navbar } from "../components/Navbar"

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-8">{children}</div>
    </>
  )
}
