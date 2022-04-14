import React from 'react';
import expart1 from '../../imag/expert-1.jpg'
import expart2 from '../../imag/expert-2.jpg'
import expart3 from '../../imag/expert-3.jpg'
import expart4 from '../../imag/expert-4.jpg'
import expart6 from '../../imag/expert-6.png'
import Expart from '../Expart/Expart';

const exparts = [
  {id: 1, name:'messi', imag:expart1 },
  {id: 2, name:'neymar', imag:expart2 },
  {id: 3, name:'ronaldo', imag:expart3 },
  {id: 4, name:'will smith', imag:expart4 },
  {id: 6, name:'m-bappi', imag:expart6 }
]


const Exparts = () => {
  return (
    <div>
      <div id='exparts' className='row'>
        {
          exparts.map(expart => <Expart 
           key={expart.id}
           expart={expart}
          ></Expart>)
        }
      </div>
    </div>
  );
};

export default Exparts;