interface TrfcProps {
  open: boolean;
}

const Trfc: React.FC<TrfcProps> = ({ open }) => {
  return <div className="wrapper">{open ? <div>Trfc</div> : null}</div>;
};

export default Trfc;
