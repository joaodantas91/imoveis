import { Properties } from "@/types/properties";
import Image from "next/image";
import Link from 'next/link'
import styles from './card.module.scss'
import { formatMoney } from "@/utils/formatMoney";

type PropertyCardProps = {
  data: Properties;
  href: string;
};

export function PropertyCard ({ data, href }: PropertyCardProps) {
  const formattedPrice = formatMoney(data.price);

  return (
    <Link href={href} className={styles.card}>
      <span className={styles["transaction-type"]}>{data.transactionType}</span>
      <Image
        alt=""
        src={`/db/images/${data.id}/${data.images[0]}`}
        width={335}
        height={335}
        style={{ objectFit: 'cover' }}
        unoptimized
      />
      <div className={styles.description}>
        <p className={styles.type}>{data.type}</p>
        <h5>{data.title}</h5>
        <ul className={styles.details}>
          <li>{data.details.area + 'm²'}</li>
          <li>{data.details.room + ` quarto${Number(data.details.room) > 1 ? 's' : ''}`}</li>
          <li>{data.details.bath + ` banheiro${Number(data.details.bath) > 1 ? 's' : ''}`}</li>
          <li>{data.details.garage + ` vaga${Number(data.details.garage) > 1 ? 's' : ''}`}</li>
        </ul>
        {data.transactionType === "aluguel" ? (<p className={styles.price}>{formattedPrice}</p>) : null}
      </div>
    </Link>
  );
}