import './mobile.css';
import { Scroll } from '../scrollmove/Scroll';

export const Mobile = () => {

    const img = [
     {id: 1, link: "/solo", src: "mobileapp3.jpg", hd: "Bank Transfer",pg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo omnis error, dicta facilis itaque tempore  ."},
     {id: 2, link: "/tech", src: "mobileapp2.png", hd: "Flexible Saving",pg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo omnis error, dicta facilis itaque tempore  ."}   
    ]

    // const Scroll = () => {
    //     document.querySelector()
    // }

    return (
        <>
                   <div className='wrapper'> 

            <div className='mobileapps'>

                {img.map((item) => {
                    return (
                        <a href={item.link}>
                        <div  className='imgraper'>
                            <img src={item.src} key={item.id} alt='solo_img'/>
                            <Scroll>
                            <h3>{item.hd}</h3>
                         <legend> {item.pg}</legend>
                            </Scroll>

                        </div>
                        </a>
                    )
                })}

            </div>
                   </div>

        </>
    )
}