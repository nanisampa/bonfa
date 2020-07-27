import Link from 'next/link';
import FollowUs from '../components/FollowUs';

const Footer = ({ name }) => (
    <div>
        <FollowUs />
        <div className="bg-covid-600">
            <div className="container flex mx-auto py-2 justify-between">
                <div className="flex p-2">
                    <p className="text-sm text-white">Consuma Local <a href="https://www.instagram.com/butantem/" className="underline font-bold hover:text-covid-900">BUTANTEM</a>. Conheça nossa <Link href="/politica-privacidad"><a className="underline font-bold hover:text-covid-900">Política de Privacidade.</a></Link></p>

                </div>
                <div className="flex p-2">
                    <p className="text-sm text-white">Desenvolvido por <a href="https://twitter.com/jerocosio" className="underline font-bold hover:text-covid-900">@JeroCosio</a>, Código <a href="" className="underline font-bold hover:text-covid-900">Butantem</a>.</p>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
