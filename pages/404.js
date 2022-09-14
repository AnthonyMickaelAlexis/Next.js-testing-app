import Image from "next/image"
import mypic from '../public/images/Deer.jpg'

export default function Custom404() {
    return (
        <>
    <h1>404 - Page Not Found</h1> 
    <Image 
    src={mypic}
    size='100vh'
    alt='Picture of a dear deer'
    // width="100vw"
    // height="100vh"
    />
    </>
    );
}