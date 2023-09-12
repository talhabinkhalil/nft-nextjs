import React, { useEffect, useState } from 'react';

const useWindowObject = () => {
  const [windowObject, setWindowObject] = useState({});

  useEffect(() => {
    setWindowObject(window);
    window?.ethereum?.on('disconnect', function (values) {});
  }, []);

  return windowObject;
};

export default useWindowObject;
