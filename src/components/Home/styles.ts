import styled from 'styled-components';
import background from '../../images/background-home.jpg';
import backgroundProfile from '../../images/background-home.png';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;

  > .links {
    display: flex;
    align-items: center;
    gap: 45px;

    > img {
      width: 92.5px;
      height: 31px;
    }

    > ul {
      display: flex;
      align-items: center;
      gap: 20px;

      > li > a {
        color: #e5e5e5;
        transition: color 0.4s;
        font-size: 14px;

        &:hover {
          color: #b3b3b3;
        }
      }
    }
  }

  > .icons {
    display: flex;
    align-items: center;
    gap: 30px;

    > img {
      width: 20px;
      height: 20px;
    }

    > div {
      > .profileImg {
        width: 32px;
        height: 32px;
        border-radius: 4px;
      }

      > span {
        border-color: #fff transparent transparent;
        border-style: solid;
        border-width: 5px 5px 0;
        height: 0;
        margin-left: 10px;
        transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
        width: 0;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: #141414;
  height: 100vh;
  padding: 0 60px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 68px);
  background-image: url(${backgroundProfile});
  background-size: 700px;
  background-repeat: no-repeat;
  background-position: bottom right;

  > div {
    > h1 {
      font-size: 70px;
      width: 480px;
      color: #fff;
      font-family: 'Chewy', cursive;
      font-weight: 100;
    }

    > p {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: normal;
      margin-top: 40px;
      width: 473px;
      text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
      margin-bottom: 30px;
    }

    > .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;

      > button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0px;
        border-radius: 4px;
        cursor: pointer;
        padding: 0.8rem;
        font-size: 16px;
        font-weight: 500;
        gap: 10px;
        color: white;

        > svg {
          font-size: 25px;
        }

        &.contractButton {
          background-color: #e50914;

          &:hover {
            opacity: 0.8;
          }
        }

        &.moreInfoButton {
          background-color: rgba(109, 109, 110, 0.7);

          &:hover {
            background-color: rgba(109, 109, 110, 0.4);
          }
        }
      }
    }
  }
`;
