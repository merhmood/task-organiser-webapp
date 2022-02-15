import React from "react";
import ReactDOM from "react-dom";

const usePortal = (portalRootId, renderElement) => {
  const [returnValue, setReturnValue] = React.useState(null);

  React.useEffect(() => {
    const el = document.createElement("div");
    let portalRoot = document.getElementById(portalRootId);
    portalRoot.appendChild(el);
    setReturnValue(ReactDOM.createPortal(renderElement, el));
    return () => {
      portalRoot.removeChild(el);
    };
  }, [portalRootId, renderElement]);
  return returnValue;
};

export default usePortal;
