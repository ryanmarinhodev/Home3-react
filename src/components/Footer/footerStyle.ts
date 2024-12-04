import styled from "styled-components";

/* Footer */
export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #101010;
  margin-top: 100px;
`;

export const FooterContent = styled.div`
  background-color: var(--color-neutral-10);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem 3.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterContacts = styled.div`
  img {
    margin-left: 30px;

    @media (max-width: 600px) {
      margin-left: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  font-size: 21px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    color: #b79d57;
    border-radius: 50%;
    transition: all 0.4s;

    i {
      font-size: 1.25rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-link {
    color: #b79d57;
    transition: all 0.4s;
    text-decoration: none;

    &:hover {
      color: #ffd700;
    }
  }

  @media (max-width: 900px) {
    margin-top: 40px;
  }
`;

export const FooterSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    color: #b79d57;
  }
  @media (max-width: 900px) {
    margin-top: 40px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(155, 155, 155, 0.2);
  border-radius: 4px;

  input {
    all: unset;
    padding: 0.75rem;
    width: 100%;
  }

  button {
    background-color: #b79d57;
    border: none;
    color: var(--color-neutral-40);
    padding: 0px 1.25rem;
    font-size: 1.125rem;
    height: 100%;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-neutral-0);
  font-size: 0.9rem;
  padding: 1.5rem;
  font-weight: 100;
  color: #fff;
`;
