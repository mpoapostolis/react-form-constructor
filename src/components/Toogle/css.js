import {css} from 'emotion';

export const container = css`
  margin: 3% 3% 0 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: white;
`;

export const labl = css`
  margin: 30px 0 10px 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const block = css`
  margin: 20px 0 20px 0;
  padding: 20px 0 20px 0;
  border: solid 1px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-start;
  width: 49.5%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const toggle = css`
  display: flex;
  text-transform: lowercase;
`;

export const toggleCont = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const description = css`
  color: #949494;
  margin-left: 20px;
`;
