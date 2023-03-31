import React, { useState } from 'react';
import image1 from '../assets/img/jacket.png';
import image2 from '../assets/img/3.png';
import image3 from '../assets/img/5.png';
import image4 from '../assets/img/mug_bg.png';

const ImageGrid = () => {
    
    
  
    return (
        <section className='categories-whole'>
            <div className="categories">
                <div className="one">
                    <img className="one-img" src={image1} alt=""/>
                </div>
                <div className="two">
                    <img className="cat-2" src={image2} alt=""/>
                    <img className="cat-3" src={image3} alt=""/>
                </div>
                <div className="one">
                    <img className="one-img" src={image4} alt=""/>
                </div>
            </div>
      </section>
    );
  };
  
  export default ImageGrid;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import image1 from '../assets/img/jacket.png';
// import image2 from '../assets/img/3.png';
// import image3 from '../assets/img/5.png';
// import image4 from '../assets/img/mug_bg.png';

// const ImageGrid = () => {
//   return (
//     <section className='categories-whole'>
//       <div className="categories">
//         <div className="one">
//           <img className="one-img" src={image1} alt=""/>
//           <Link to="/category1"><button>Category 1</button></Link>
//         </div>
//         <div className="two">
//           <img className="cat-2" src={image2} alt=""/>
//           <img className="cat-3" src={image3} alt=""/>
//           <Link to="/category2"><button>Category 2</button></Link>
//         </div>
//         <div className="one">
//           <img className="one-img" src={image4} alt=""/>
//           <Link to="/category3"><button>Category 3</button></Link>
//         </div>
//       </div>
//     </section>
//   );
// };
  
// export default ImageGrid;