import Feelit from '../Feelit'
import Header from '../Header'
import LogoSlider from '../LogoSlider'
import Testimonial from '../Testimonial'
import Footer from '../Footer'
import './index.css'


function Home(){
    return(
        <>
        <Header />
        <div className='hero-container'>
            <form className='form'> 
            <h1 className='form_title'>Search your next ride</h1>
            <h1 className='form_heading' style={{marginRight : "auto" , marginTop:'25px'}}>Pickup</h1>
            <div className='top_container'>
                <div className='pickup_date'>
                <h2 className='form_heading'  style={{
                    color : 'lightblack' 
                }}>Date</h2>
                <input type='date' style={{border: 'none' , marginLeft : '25px' , outline : 'none'}}/>
                </div>
                <div className='pickup_date'>
                <h2 className='form_heading'  >Time</h2>
                <input type='time' style={{border: 'none' , marginLeft : '25px' , outline : 'none'}}/>
                </div>
            </div>
            <h1 className='form_heading'  style={{marginRight : "auto"}}>DropOff</h1>
            <div className='top_container'>
                <div className='pickup_date'>
                <h2 className='form_heading'  style={{
                    color : 'lightblack' 
                }}>Date</h2>
                <input type='date' style={{border: 'none' , marginLeft : '25px' , outline : 'none'}}/>
                </div>
                <div className='pickup_date'>
                <h2 className='form_heading' >Time</h2>
                <input type='time' style={{border: 'none' , marginLeft : '25px' , outline : 'none'}}/>
                </div>
            </div>
            <button type='button' className='search_button'>Search</button>
        </form>
        </div>
        <form className='smallDevice_form'> 
            <h1 className='form_title'>Search your next ride</h1>
            <h1  className='form_heading'  style={{marginRight : "auto" , marginTop:'25px'}}>Pickup</h1>
            <div className='top_container'>
                <div className='pickup_date'>
                <h2 className='form_heading' >Date</h2>
                <input type='date' style={{border: 'none' , marginLeft : '25px' , outline : 'none'}}/>
                </div>
                <div className='pickup_date'>
                <h2 className='form_heading' >Time</h2>
                <input type='time' style={{border: 'none' , marginLeft : '25px' , outline : 'none'}}/>
                </div>
            </div>
            <h1 className='form_heading'  style={{marginRight : "auto"}}>DropOff</h1>
            <div className='top_container'>
                <div className='pickup_date'>
                <h2 className='form_heading'  style={{
                    color : 'lightblack' 
                }}>Date</h2>
                <input type='date' style={{border: 'none' , marginLeft : '25px' , outline : 'none'}}/>
                </div>
                <div className='pickup_date'>
                <h2 className='form_heading' >Time</h2>
                <input type='time' style={{border: 'none' , marginLeft : '25px' , outline : 'none'}}/>
                </div>
            </div>
            <button type='button' className='search_button' >Search</button>
        </form>
        <Testimonial />
        <Feelit />
        <LogoSlider />
        <Footer />       
        </>
    )
}

export default Home