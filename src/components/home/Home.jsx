import React from 'react'
import './home.css'
import './particles.json';

const Home = () => {
  return (
    <div>
    <div id="particles-js"></div>
    
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js"></script>

    <script>
      
      particlesJS.load('particles-js', 'particles.json', function(){
        console.log('particles.json loaded...')
      } );
      
    </script>
    </div>
  )
}

export default Home