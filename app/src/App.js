import logo from './imagesinproj/faradayfirsteditted.png';
import './App.css';


const imgMyimageexample = require('./imagesinproj/faradayfirsteditted.png');
const divStyle = {
  width: '1280px',
  height: '720px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover'
};

function App() {
  return (
    <div className="App" style={divStyle}>
      <div class="square">
      </div>  
    </div>
  );
}


function locationDraw (xy1, xy2) {

  var xy1 = {
     m_x : Math.floor((Math.random() * 200) + 1),
     m_y : Math.floor((Math.random() * 200) + 1),
   };
  
   var xy2 = {
      m_x : Math.floor((Math.random() * 200) + 1),
      m_y : Math.floor((Math.random() * 200) + 1),
   };
  
   var dotA =  document.getElementById("dotA");
   dotA.style.left = (xy1.m_x - 5) + "px";
   dotA.style.top = (xy1.m_y - 5) + "px";

   var dotB =  document.getElementById("dotB");
   dotB.style.left = (xy2.m_x - 5) + "px";
   dotB.style.top = (xy2.m_y - 5) + "px";

   var line = document.getElementById("line");
            
   var distance = Math.hypot(xy2.m_x - xy1.m_x, xy2.m_y - xy1.m_y);
            
   line.style.width = distance + "px";
   line.style.left = xy1.m_x + "px";
   line.style.top = xy1.m_y + "px";
            
   var angle = ((Math.atan2(xy1.m_x - xy2.m_x, xy2.m_y - xy1.m_y) + (Math.PI / 2.0)) * 180 / Math.PI);
   line.style.transform = "rotate(" + angle + "deg)";
   line.style.display = "block";
}


export default App;
