import { useEffect } from "react";
import pdfFile from "../../../assets/OTC.pdf";

const Otc = () => {
  useEffect(() => {
    window.open(pdfFile, '_blank');
    window.location.href = '/';
  }, []);
  return <></>;
};

export default Otc;

