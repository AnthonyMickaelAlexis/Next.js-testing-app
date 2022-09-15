import Image from "next/image"
// import deerpic from '../public/images/Deer.jpg'

export default function Custom404() {
    return (
        <>
    <h1>404 - Page Not Found</h1> 
    <Image 
    src='/images/Deer.jpg'
    width='40vw'
    height='40vh'
    layout='responsive'
    size='100vh'
    alt='Picture of a dear deer'
    // width="100vw"
    // height="100vh"
    />
    </>
    );
}