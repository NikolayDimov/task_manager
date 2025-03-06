import { styled } from 'styled-components';

export const SidebarStyles = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${(props) => props.theme.colorGrey03};
`;

export const SidebarStylesProfile = styled.div`
    margin: 1.5rem;
    position: relative;
    padding: 1rem 0.8rem;
    border-raduis: 1rem;
    ciursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.colorGrey0};
    display: flex;
    align-items: center;
`;

export const SidebarImage = styled.div`
    width: 70px;   
    height: 70px; 
    border-radius: 50%; 
    overflow: hidden;  
    display: flex;
    justify-content: center;
    align-items: center;
`;



export const NavItem = styled.li`
  padding: 10px 15px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;  /* Change this to whatever color you want */
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #fff; /* Optional: color change on hover for link text */
  }
`;
