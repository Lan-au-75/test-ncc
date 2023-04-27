import Footer from './components/Footer/footer'
import Main from './components/Main/Main'
import Slider from './components/Slider/Slider'

function App() {
    return (
        <div className='container'>
            <Slider />
            <div className='container-wrapper'>
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App
