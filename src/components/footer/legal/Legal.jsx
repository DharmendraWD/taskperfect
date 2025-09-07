import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { footerAsideStatus, footerAside } from '../../../redux/slices/footer/footerSLice';
import { useDispatch, useSelector } from 'react-redux';
import HeadingL from '../../utilities/HeadingL';
import Loading2 from '../../utilities/loading/Loading2';
import ParaTextStart from '../../utilities/Para/ParaTextStart';


const Legal = () => {
    const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state || {};
const data = useSelector((state) => state.footerAsideS);


useEffect(() => {
  dispatch(footerAside());
}, [dispatch]);

const footerContent = data?.data?.data?.items[id];

console.log(footerContent)


if (data.loading) {
  return <div className='text-white min-h-screen flex justify-center items-center relative text-2xl'>
<Loading2></Loading2>
  </div>
}


  return (
    <div className="text-white mt-20 lg:mt-4  text-justify min-h-screen flex flex-col gap-4">
<HeadingL label={footerContent?.title} />
<ParaTextStart label={footerContent?.description} />
    </div>
  );
};

export default Legal;
