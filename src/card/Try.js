// Using axios in function component

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Try() {
//   const url = 'https://61563acee039a0001725a94b.mockapi.io/himym/characters';
//   const [trys, setTrys] = useState(null);

//   useEffect(() => {
//     axios.get(url).then((response) => {
//       setTrys(response.data);
//     });
//   }, [url]);

//   if (trys) {
//     return (
//       <div>
//         {trys.map((data) => (
//           <div key={data.id} className="card-list">
//             <h1>{data.name}</h1>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Not</h1>
//     </div>
//   );
// }

// export default Try;
