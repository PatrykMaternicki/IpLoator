import React from 'react';
import { Preloader, Oval } from 'react-preloader-icon';
import NoData from './NoData';

const preloaderComponent = () => (
  <Preloader
    use={Oval}
    size={126}
    strokeWidth={8}
    strokeColor="#3f51b5"
    duration={800}
  /> 
)

const noDataComponent = () => (
  <NoData />
)

const factory = (state) => {
  const components = {
    'loading': preloaderComponent,
    'noData': noDataComponent
  }
  return components[state]()
}


const test = ({state}) => {
  return (
    <React.Fragment>
      {factory(state)}
    </React.Fragment>
  )
}

export default test