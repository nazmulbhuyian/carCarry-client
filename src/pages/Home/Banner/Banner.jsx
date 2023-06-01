
import one from '../../../assets/banner/one.jpg'
import two from '../../../assets/banner/two.jpg'
import three from '../../../assets/banner/three.jpg'
import './Banner.css'
import  Fade  from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full h-[500px] relative">
                    <img src={two} className="w-full" />
                    <Fade left>

                    <h1 className='absolute lg:text-6xl text-white font-bold lg:left-20 lg:top-10 text-3xl left-5 top-10'>Impression<br /><span className='text-red-500'>Make</span><br />Customers</h1>
                    <p className='absolute text-white lg:font-bold lg:left-20 lg:top-64 left-5 top-40'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Facilis, placeat.</p>
                    <button className='absolute text-white text-2xl lg:font-bold lg:left-20 lg:top-80 underline top-56 left-5'>Contact Now</button>
                    </Fade>
                </div>
                <div id="item2" className="carousel-item w-full h-[500px] relative carousel-img">
                    <img src={one} className="w-full" />
                    <Rotate top left>
                    <h1 className='absolute lg:text-6xl text-white font-bold lg:left-28 lg:top-10 text-3xl left-5 top-10'>Experience<br /><span className='text-red-500'>Cars</span><br />Leasing</h1>
                    <p className='absolute text-white lg:font-bold lg:left-28 lg:top-64 left-5 top-40'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Facilis, placeat.</p>
                    <button className='absolute text-white text-2xl lg:font-bold lg:left-28 lg:top-80 underline top-56 left-5'>Register Now</button>
                    </Rotate>
                </div>
                <div id="item3" className="carousel-item w-full h-[500px] relative">
                    <img src={three} className="w-full" />
                    <Zoom left>
                    <h1 className='absolute lg:text-6xl text-gray-200 font-bold lg:left-28 lg:top-10 text-3xl left-5 top-10'>Make an Impression <br /> Cars for Every Budget</h1>
                    <p className='absolute text-white lg:font-bold lg:left-28 lg:top-52 left-5 top-40'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Facilis, placeat.....</p>
                    <button className='absolute text-white text-2xl lg:font-bold lg:left-28 lg:top-72 underline top-56 left-5'>Ride Now</button>
                    </Zoom>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;