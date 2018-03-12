import {css} from 'emotion';

export const container = css`
  width: 100%;
  display: flex;
  padding-top: 70px;
  justify-content: center;
`;

export const item = css`
  margin: 5px;
  font-weight: 500;
  width: 100%;
  margin: 30px;
  p {
    margin: 0;
  }
`;

export const loginBody = css`
  padding: 30px;
  width: 95%;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.25);
`;

export const label = css`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
`;

export const row = css`
  display: flex;
`;

export const btnCont = css`
  display: flex;
  justify-content: flex-end;
`;

export const stepper = css`
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
`;

export const step = css`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0002;
    
  &.active {
    background: #2196f3;
    color: white;
  }
`;
