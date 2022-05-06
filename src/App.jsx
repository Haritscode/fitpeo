import './index.css'
import Navbar from './Components/Navbar/Navbar';
import Left from './Components/Left/Left';
import Main from './Components/Main/Main';
function App() {
  const profiles=[
    {
      img:"/Navbaricons/wp6950537-yash-hd-wallpapers.jpg",
      flagicon:"/Navbaricons/icons8-india-color/icons8-india-48.png"

    }
  ]
  return (
    <>
    <div className='flex'>
      <Left Profile={profiles} />
      <div className='w-full'>
        <Navbar Profile={profiles}/>
        <div className='mt-12'>
          <Main/>
        </div>
      </div>
      <div>
      </div>
    </div>
    </>
  );
}

export default App;
