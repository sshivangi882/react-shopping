
import './NetflixIndexComponent.css';
import NetflixHeaderComponent from './NetflixHeaderComponent';
import NetflixMainComponent from './NetflixMainComponent';

export default function NetflixIndexComponent()
{
    return(
        <div className="container-fluid">
            <div className="box">
                <header>
                     <NetflixHeaderComponent />
                </header>
               <section className="d-flex justify-content-center align-items-center">
                    <main> <NetflixMainComponent /> </main>
                   
               </section>
               
            </div>
        </div>
    )
}