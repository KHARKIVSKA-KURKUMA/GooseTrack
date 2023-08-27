import styled from "styled-components";

const ModalOverlay = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 1200;`;

export { ModalOverlay };