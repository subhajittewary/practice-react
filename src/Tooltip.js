import React, { useState } from 'react';
import { Observable } from 'rxjs';

const Tooltip = ({ children, tooltipText, width }) => {
  const [visible, setVisible] = useState(false);

//   import { Observable } from 'rxjs';

// const observable = new Observable(subscriber => {
//   // const intervalId = setInterval(() => {
//     subscriber.next('Emitting value');
//   // }, 1000);

//   // Cleanup logic
//   return () => {
//     // clearInterval(intervalId);
//     console.log('Observable unsubscribed');
//   };
// });

// const observer = {
//   next: x => console.log(x),
//   error: err => console.error('Error:', err),
//   complete: () => console.log('Complete')
// };

// const subscription = observable.subscribe(observer);

// Unsubscribe after 5 seconds
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000);

// Output:
// Emitting value
// Emitting value
// Emitting value
// Emitting value
// Observable unsubscribed


  const showTooltip = () => {
    setVisible(true);
  };    

  const hideTooltip = () => {
    setVisible(false);
  };

  const tooltipStyle = {
    width: width || '100%',  // default to 100% if width is not provided
  };

  return (
    <>
    <h1>Tooltip Component</h1>
    <div 
      className="tooltip-container" 
      onMouseEnter={showTooltip} 
      onMouseLeave={hideTooltip}
    >
       
      {children}
      {visible && (
        <div className="tooltip" style={tooltipStyle}>
          {tooltipText}
        </div>
      )}
    </div>
    </>
  );
};



export default Tooltip;
