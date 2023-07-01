const Wrapper = styled.div`
  --section-gap: 23px;
  padding-top: 42px;

  @media (max-width: 1155px) {
    .line-rounded-corners {
      display: none !important;
    }
  }

  @media (max-width: 998px) {
    padding-top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  gap: var(--section-gap);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--section-gap) 24px;

  @media (max-width: 768px) {
    padding: var(--section-gap) 12px;
  }
`;

const Header = styled.div`
  display: flex;
`;

const Name = styled.span`
  font-size: large;
  color: #89c70d;
  font-weight: bold;
`;

const Logo = styled.span`
  width: 25px;
  height: 25px; 
  padding: 2px;
`;

return (
  <Wrapper>
        <Header>
            <Logo>
                <svg viewBox="0 0 26 24" fill="none" aria-hidden="true">
                <path
                    d="M24.3767 8.06326L1.51965 0.0649912C1.10402 -0.0830767 0.639031 0.026026 0.327308 0.340346C0.0181841 0.657263 -0.0831256 1.12225 0.0701378 1.53788L8.071 23.2519C8.23726 23.7013 8.66587 24 9.14385 24H9.14644C9.62702 24 10.0556 23.6961 10.2167 23.2441L13.734 13.495L24.3325 10.2349C24.8053 10.0895 25.13 9.65824 25.1378 9.16468C25.1482 8.67112 24.8391 8.22691 24.3715 8.06326H24.3767Z"
                    fill="#89c70d"
                />
                </svg>
            </Logo>
            <Name className="text-green-900 font-bold leading-tight"> Repute </Name>
            <span className="text-xs">Trade the Untradeable</span>
        </Header>
        <hr />
  </Wrapper>
);