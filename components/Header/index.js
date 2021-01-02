import { NavigationsStyled } from "../styles";
import DNavbar from "./Navbar";
export default function Header({ navigations }) {
  return (
    <>
      <NavigationsStyled>
        <DNavbar />
      </NavigationsStyled>
    </>
  );
}
