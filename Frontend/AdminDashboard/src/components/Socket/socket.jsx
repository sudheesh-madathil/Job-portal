// import { createContext, useContext, useEffect } from 'react';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3000'); // Connect to the Socket.IO server

// const SocketContext = createContext();

// export const SocketProvider = ({ children }) => {
//   useEffect(() => {
//     socket.on('connect', () => {
//       console.log('Connected to Socket.IO server');
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <SocketContext.Provider value={socket}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export const useSocket = () => useContext(SocketContext);
