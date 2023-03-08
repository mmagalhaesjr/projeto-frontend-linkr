import { StyledNavBar } from "./styled";
import { VscChevronDown } from "react-icons/vsc";

export default function NavBar() {
    return (

        <StyledNavBar>
            <div><h1>linker</h1></div>
            <div>
                <ion-icon>
                    <VscChevronDown />
                </ion-icon>
                <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image04_grd.png" alt="imagem" />
            </div>

        </StyledNavBar>

    )
}