import { styled } from 'styled-components';

export const SidebarStyles = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: ${(props) => props.theme.colorBg2};
    border-right: 2px solid ${(props) => props.theme.borderColor};
    border-radius: 1rem;
`;
