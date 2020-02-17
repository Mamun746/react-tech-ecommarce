import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";

export default function Sidebar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { links, sideBarOpen, handleSideBar } = value;
        return (
          <SideWrapper show={sideBarOpen}>
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.id} className='sidebar-link'>
                    <Link to={link.path} onClick={handleSideBar}>{link.text}</Link>
                    
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGray);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }

  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
    text-decoration: none;
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
