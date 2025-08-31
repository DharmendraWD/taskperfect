import React from 'react'
import PromoShareCard from './PromoShareCard'
import { useDispatch, useSelector } from 'react-redux';
import { totalPromoshare } from '../../../redux/slices/promoShare/PromoshareSlice';

function PromoShare() {
    const dispatch = useDispatch();
    const allPromoshare = useSelector((state)=>state.promoshare) 

    React.useEffect(() => {
        dispatch(totalPromoshare());
      }, [dispatch]);


  return (
    <div>
         <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">
        Promoshare Lorem Ipsum Dolor
        </h2>
        <p className="text-white/60 text-sm text-center mb-6">
          Lorem ipsum dolor sit amet consectetur.
        </p>
    <div className="grid grid-cols-1 justify-self-center md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
            allPromoshare.data.map((promoshare, index) => (
                <PromoShareCard title = {promoshare.title} desc={promoshare.description} img={promoshare.thumbnail} key={index}/>
            ))
        }

    </div>
    </div>
  )
}

export default PromoShare