import './App.css';
import React from 'react';
import Image from './resources/42313363.jpg'
import { FaFolder, FaFacebookSquare , FaTwitterSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";

function App() {
  return (
<div class="box">
    <img src={Image} alt="image" class="box-img"/>
    <h2>
        Mutlu Eren
    </h2>
    <h5>
        Software Developer
    </h5>
    <p>
        I have experienced over 3 years with object oriented design and architecture. <br/>
        I generally use Java technologies on Web projects. <br/>
        I have also knowledge of client side programming such as Javascript, Ajax calls, HTML, CSS. <br/>
        I support using best practices, code reviews and pair programming to produce better quality software.<br/>
    </p>
    <ul>
        <li><a href="https://www.facebook.com/mutlueren95"><FaFacebookSquare/></a></li>
        <li><a href="https://twitter.com/mutlueren01"><FaTwitterSquare/></a></li>
        <li><a href="https://www.linkedin.com/in/mutlu-eren-2697b1162/"><FaLinkedin/></a></li>
        <li><a href="https://github.com/mutlueren"><FaGithubSquare/></a></li>
        <li><a href="https://drive.google.com/file/d/1A8VxQpu2yeqTDgHqPZWp9cH2b1bfZBqh/view?usp=sharing"><FaFolder/></a></li>
    </ul>
</div>
  );
}

export default App;
