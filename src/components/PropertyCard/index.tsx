import Image from "next/image";
import Link from 'next/link'

type PropertyCardProps = {
    data: {
        id: string;
        title: string;
        description: string;
        images: string[];
    };
    href: string;
};

export function PropertyCard({data, href}: PropertyCardProps) {
    return (
        <Link href={href}>       
          <Image
            alt="" 
            src={`/db/images/${data.id}/${data.images[0]}`} 
            width={300} 
            height={300} 
            style={{objectFit: 'cover'}}
            unoptimized
          />
          <h5>{data.title}</h5>
        </Link>
    );
}