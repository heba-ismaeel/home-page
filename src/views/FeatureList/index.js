import React from 'react';
import AddsBar from "../../components/AddsBar";
import Header from "../../components/Header";
import Panner from './Panner';
import Sort from './Sort';
import Loading from './Loading';
import Footer from '../../components/Footer';
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
