import React, { useEffect } from 'react';

function Giffy() {
  useEffect(() => {
    const removeElementTimeout = setTimeout(() => {
      var elem = document.getElementById('div-1');
      if (elem) {
        var parentElem = elem.parentNode;
        parentElem.removeChild(elem);
      }
    }, 2400);

    // Clean up the timeout if the component is unmounted before the 2 seconds
    return () => clearTimeout(removeElementTimeout);
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <iframe src="https://giphy.com/embed/SS747qapxRlz1a7fwH" width="100%" height="100%" frameBorder="0" id="div-1" class="giphy-embed" allowFullScreen></iframe>
  );
}

export default Giffy;
