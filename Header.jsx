const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  gap: var(--section-gap);
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: var(--section-gap) 24px;

  @media (max-width: 768px) {
    padding: var(--section-gap) 12px;
  }
  background-color: #b96868;
  border-bottom: black 1px;
`;

const Logo = styled.div`
  svg {
    fill: #89c70d;
    width: 30px; 
    height: 30px; 
    transition: rotate(1turn);
    &:hover {
        transform: rotate(0.5turn);
        fill: #b3e253; 
    }
  }
  padding: 3px;
`;

const LogoContainer = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`;

const ButtonContainer = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  padding-right: 15px;
`;

const Name = styled.span`
    font-size: 50px;
    color: #89c70d;
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
    &:hover {
                color: #b3e253; 
            }
`;

const Offer = styled.button`
  color: #b3e253;;
  background-color: #b96868;
  border-radius: 5px;
  border-width: 0px;
  &:hover {
                background-color: #b3e253;
                color: white; 
                border-width: 1px;
                border-color: black;
                box-shadow: #b3e253;
            }
`;

return (
  <>
    <Container>
      <LogoContainer>
        <Logo>
          <svg viewBox="0 0 26 24" fill="none" aria-hidden="true">
            <path
                d="M24.3767 8.06326L1.51965 0.0649912C1.10402 -0.0830767 0.639031 0.026026 0.327308 0.340346C0.0181841 0.657263 -0.0831256 1.12225 0.0701378 1.53788L8.071 23.2519C8.23726 23.7013 8.66587 24 9.14385 24H9.14644C9.62702 24 10.0556 23.6961 10.2167 23.2441L13.734 13.495L24.3325 10.2349C24.8053 10.0895 25.13 9.65824 25.1378 9.16468C25.1482 8.67112 24.8391 8.22691 24.3715 8.06326H24.3767Z"
            />
          </svg>
        </Logo>
        <Name>Repute</Name>
      </LogoContainer>
      <ButtonContainer>
        <Offer>Post an Offer</Offer>
      </ButtonContainer>
    </Container>
  </>
);