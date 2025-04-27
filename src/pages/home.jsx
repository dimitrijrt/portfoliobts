import style from './home.scss'
import projets from '../data/projets.json'
import E6 from '../data/E6.json'
import web from '../data/web.json'
import DropdownButton from 'react-bootstrap/Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { DiCss3, DiJsBadge, DiHtml5, DiSass, DiGithubBadge } from "react-icons/di";
import { useState } from "react";



function Home() {
    
    const [toggle, setToggle] = useState(false);
  
  return (
  
    
    
    <div className="main">
       <h1 id="skills">Mes Projets</h1>
       <h2>Projets Epreuve E5 : </h2>
       <div className='grid'>
       <div className='projets'>
            {projets.map((projet, index) => (
                <div className='projetTile'> 
                    <h2 className='titreProjets'>{projet.title}</h2>
                    <p className='skill'>{projet.compétence}</p>
                      <img className='images' src={projet.pictures[0]} alt="projets images"></img>
                        <div className='description'>
                            <p>{projet.description}</p>
                              {projet.github && (
                            <a href={projet.github} target="_blank" rel="noopener noreferrer">
                              <button>
                                 <DiGithubBadge size="26px" />Lien GitHub
                              </button>
                            </a>
                          )}
                             {projet.pdf && (
                            <a href={projet.pdf} >
                            <button >Descriptif</button>
                            </a>
                             )}
                        </div> 
                        
                    </div>
                                      

            ))}
       </div>
       </div>
       <h2>Projets épreuve E6 :</h2>
       <div className='grid'>
       <div className='projets'>
            {E6.map((projet, index) => (
                <div className='projetTile'> 
                    <h2 className='titreProjets'>{projet.title}</h2>
                    <p className='skill'>{projet.compétence}</p>
                      <img className='images' src={projet.pictures[0]} alt="projets images"></img>
                        <div className='description'>
                            <p>{projet.description}</p>
                               <a href={projet.github}>
                            <button ><DiGithubBadge size="26px"/>Lien github</button>
                            </a>
                             {projet.pdf && (
                            <a href={projet.pdf} >
                            <button >Descriptif</button>
                            </a>
                             )}
                        </div> 
                        
                    </div>
                        
                    

            ))}
       </div>
       </div>
       <h2>Projets Web :</h2>
       <div className='grid'>
       <div className='projets'>
            {web.map((projet, index) => (
                <div className='projetTile'> 
                    <h2 className='titreProjets'>{projet.title}</h2>
                    <p className='skill'>{projet.compétence}</p>
                      <img className='images' src={projet.pictures[0]} alt="projets images"></img>
                        <div className='description'>
                            <p>{projet.description}</p>
                             {projet.github && (
                             <a href={projet.github}>
                            <button ><DiGithubBadge size="26px"/>Lien github</button>
                            </a>
                          )}

                             {projet.pdf && (
                            <a href={projet.pdf} >
                            <button >Descriptif</button>
                            </a>
                             )}
                        </div> 
                        
                    </div>
                        
                    

            ))}
       </div>
       </div>
       
       
       
    </div>
    
    
      
    
      
   
    
   
   
  )
}

export default Home;