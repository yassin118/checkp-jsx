  import logo from './logo.svg';
import './App.css';
import image from './client 2.jpg';
import './index.css';



function App() {
  return (
    <div 
    
    style={{ border: "solid"  , color :"black",maxWidth:100 , maxHeight:150}} >
        <div> <h1 className="titleredgit add README.md">Your name here</h1> </div>
       <br/>
       
      <img width="320" height="340"  src="/client.png" />
       
      <br/>
      
      {
   <img width="350" height="350" src={image}   />
   }
      
      <video width="320" height="240" controls src="myVideo.mp4" type="video/mp4" />
      
     
    </div>
  );
}

export default App;
