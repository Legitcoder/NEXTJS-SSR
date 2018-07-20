import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
    return (
        <div style={{fontSize: '20px', color: 'blue'}}>
            <h1>About</h1>
            <Link href='/'>
                <button>Back</button>
            </Link>
            <Image />
            <p>I think I know what I'm doing</p>
        </div>
    );
}

export default About;