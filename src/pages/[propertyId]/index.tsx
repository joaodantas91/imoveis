import InternalCarousel from "@/components/InternalCarousel";
import Container from "@/components/Container";
import { PropertyDetailsAside } from "@/components/PropertyDetailsAside";
import style from './styles.module.scss';
import localDB from '@/public/db/properties';
import { useRouter } from "next/router";
import Link from "next/link";
import { Section } from "@/components/Section";

export default function Property({ params }: { params: { propertyId: string } }) {
  // const propertyId = params.propertyId;
  const router = useRouter()
  const { propertyId } = router.query

  // const data = new Array(22).fill(undefined).map((_, index) => ({
  //   link: `https://source.unsplash.com/random/800x800?apartment-${index}`,
  //   key: index.toString()
  // }))

  const data = localDB.find(item => item.id === propertyId);

  if (data) {
    return (
      <>
        <InternalCarousel data={data} />
        <Section>
          <Container>
            <p><Link className="button" href="/" >Voltar para lista</Link></p>
          </Container>
          <Container className={style.container}>

            <article>
              <h3>{data.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: data.description.replace(/\n/g, "<br />") }} />
            </article>
            <PropertyDetailsAside />
          </Container>
        </Section>
      </>
    );
  }
  return <>NO DATA</>
}