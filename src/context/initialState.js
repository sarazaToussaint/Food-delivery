import fetchUser from '../utils/fetchLocalStorageData';

const userInfo = fetchUser();

// eslint-disable-next-line import/prefer-default-export
export const initialState = {
  user: userInfo,
};
