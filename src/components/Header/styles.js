import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;

  gap: 64px;

  padding: 24px 123px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-family: 'Roboto Slab';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  }

  > div {
    min-width: 100px;

    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: normal;

    text-align: right;

    strong {
      word-wrap: break-word;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_000};
    }

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

  }



`;
