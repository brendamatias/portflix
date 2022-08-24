import styled from 'styled-components';
import profile from '../../images/profile.jpeg';
import addIcon from '../../images/add-icon.svg';

export const Container = styled.div`
  background-color: #141414;
  height: 100vh;
  padding: 0 60px;

  > .header {
    display: flex;
    align-items: center;
    height: 68px;

    > img {
      width: 92.5px;
      height: 31px;
    }
  }

  > .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 68px);

    > div {
      > h1 {
        color: #fff;
        font-size: 3.5vw;
        font-weight: unset;
        margin: 0.67em 0;
      }

      > .profiles {
        display: flex;
        align-items: center;
        justify-content: center;

        > a {
          margin: 0 2vw 0 0;

          &:hover {
            > span {
              color: #e4e4e4;
            }

            > .image::after {
              border-color: #e4e4e4;
            }
          }

          > span {
            display: block;
            font-size: 1.3vw;
            line-height: 1.2em;
            color: grey;
            margin: 0.6em 0;
            min-height: 1.8em;
            overflow: hidden;
            text-align: center;
            text-overflow: ellipsis;
          }

          > .image,
          > .addProfileIcon {
            border: 0.3em solid transparent;
            border-radius: 4px;
            background-repeat: no-repeat;
            background-size: cover;
            border: none;
            border-radius: 4px;
            box-sizing: border-box;
            height: 10vw;
            max-height: 200px;
            max-width: 200px;
            min-height: 84px;
            min-width: 84px;
            position: relative;
            text-decoration: none;
            width: 10vw;
          }

          > .image {
            background-image: url(${profile});
            background-color: #333;

            &::after {
              border: 0.3em solid transparent;
              border-radius: 4px;
              bottom: 0;
              content: '';
              display: block;
              left: 0;
              position: absolute;
              right: 0;
              top: 0;
            }
          }

          > .addProfileIcon {
            background-image: url(${addIcon});
            background-size: 80px;
            background-position: center;

            &:hover {
              background-color: #e4e4e4;
            }
          }
        }
      }

      > .profile-button {
        display: flex;
        align-items: center;
        justify-content: center;

        > a {
          background-color: transparent;
          border: 1px solid grey;
          color: grey;
          cursor: pointer;
          font-size: 1.2vw;
          letter-spacing: 2px;
          margin: 2em 0 1em;
          padding: 0.5em 1.5em;

          &:hover {
            color: #e4e4e4;
            border-color: #e4e4e4;
          }
        }
      }
    }
  }
`;
