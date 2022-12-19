import React from 'react';
import Panner from './Panner';
import Loading from './Loading';
import Bcomponent from './Bcomponent';
import SortFeature from '../../components/Testt';

const FeatureList
 = () => {
  return (

 <>

    <Panner/>
{/* <Sort/>data={data} */}
<SortFeature/>
<Bcomponent />
<Loading/>
 </>
  )
}

export default FeatureList
