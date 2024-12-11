import React from 'react';


const Footer:React.FC = () => {
    return(

        <footer className='' >
            <h1>Footer</h1>
            <div className='size-14'>
                <img  src="src/assets/images/pulsora@A.png" alt="" />
            </div>
            <p>+33 7 58 63 65 89</p>
            <p>17 rue Jablinot, 77100 Meaux</p>
            <div>
                <ul className='flex'>
                    <li ><img className='size-10'  src="src/assets/images/social/facebook.png" alt="" /></li>
                    <li ><img className='size-10'  src="src/assets/images/social/icons8-linkedin-50.png" alt="" /></li>
                    <li ><img className='size-10'  src="src/assets/images/social/icons8-snapchat-50.png" alt="" /></li>
                    <li ><img className='size-10'  src="src/assets/images/social/icons8-twitterx-50.png" alt="" /></li>
                    <li ><img className='size-10'  src="src/assets/images/social/insta.png" alt="" /></li>

                </ul>
            </div>
            <hr className="h-px my-8 bg-blue-900 opacity-50 border-0 mx-16"/>
            <div className=''>
                <ul  className='      bg-blue-300' >
                    <div className='flex justify-center space-x-7   left-8 bg-yellow-400' >
                        <li>Accueil</li>
                        <li>Saison</li>
                        <li>Equipe</li>
                        <li>Contact</li>
                    </div>
                    <div  className='flex  bg-gray-500   right-8' >
                        <li className='' >Copyright 2025 - Pulsora</li>
                    </div>
                </ul>
            </div>
        </footer>

    );
  
};

export default Footer;