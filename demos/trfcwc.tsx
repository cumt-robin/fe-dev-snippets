import { PropsWithChildren } from "react";

interface TrfcProps {
  open: boolean;
}

const Trfc: React.FC<PropsWithChildren<TrfcProps>> = ({ open, children }) => {
  return <div className="wrapper">
    {open ? <div>Trfc</div> : null}
    {children}
  </div>;
};

export default Trfc;