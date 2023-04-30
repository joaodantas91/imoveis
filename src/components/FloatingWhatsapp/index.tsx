import Link from "next/link";
import styles from './FloatingWhatsapp.module.scss';
import WhatsappIcon from '@/public/img/icons/whatsapp.svg'
import Image from "next/image";

export function FloatingWhatsapp() {
    return (
        <Link target="_blank" href={`https://wa.me/5591981263809`} className={styles.FloatingWhatsapp}>
            <Image alt="Icone Whatsapp" src={WhatsappIcon} />
        </Link>
    );
}