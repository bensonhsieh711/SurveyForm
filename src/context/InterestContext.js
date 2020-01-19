import React from 'react';

export const interestList = [];

// export const themes = {
//     light: {
//       foreground: '#000000',
//       background: '#eeeeee',
//     },
//     dark: {
//       foreground: '#ffffff',
//       background: '#222222',
//     },
//   };
  
export const InterestContext = React.createContext(
    //themes.dark // default value
    interestList
    );