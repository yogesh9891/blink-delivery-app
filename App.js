import React, {useState, useEffect, useContext, createContext} from 'react';
import Root from './src/navigations/Stack/Root';
export const BottomSheetContext = createContext();
export const TokenContext = createContext();
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const axiosApiInstance = axios.create();
const App = () => {
  const [bottomSheetToggle, setBottomSheetToggle] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);
  return (
    <>
      <BottomSheetContext.Provider value={[bottomSheetToggle, setBottomSheetToggle]}>
        <TokenContext.Provider value={[isAuthorised, setIsAuthorised]}>
          <Root />
          <Toast/>
        </TokenContext.Provider>
      </BottomSheetContext.Provider>
    </>
  );
};

export default App;
