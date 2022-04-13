import { NavLink } from "react-router-dom"
import styled from "styled-components";

// Navbar content
export const Navbar = () => {
    const pageLinks =[
        {
            to: "/",
            lable: "Home"
        },
        {
            to: "/rover",
            lable: "Images"
        }

    ];

    const Navigation = () => {
        <>
            {pageLinks.map((link, index) => (<StyledNavLinks key={index} to={link.to}></StyledNavLinks>

            ))}
        </>
    }

    return (
        <NavBarContainer>
            <p>hello world</p>
            <Navigation />
        </NavBarContainer>
    )

}

// Styled componants

    const NavBarContainer = styled.nav`
        display: flex;
        height: 5vh;
        width: 100vw;
        justify-content: center;
        align-items: center;
        border: solid 1px red;
    `

    const StyledNavLinks = styled(NavLink)`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4vh;
        width: 9vw;
    `