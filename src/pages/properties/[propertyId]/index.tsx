import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { PropertyDetailsAside } from "@/components/PropertyDetailsAside";
import style from './styles.module.scss';

export default function Property({ params }: { params: { propertyId: string } }) {
  // const propertyId = params.propertyId;
  const data = new Array(22).fill(undefined).map((_, index) => ({
    link: `https://source.unsplash.com/random/800x800?apartment-${index}`,
    key: index.toString()
  }))
  // console.log(data)
  return (
    <main>
      <Banner data={data} />
      <Container className={style.container}>
        <article>
          teste
        </article>
        <PropertyDetailsAside />
      </Container>
    </main>
  );
}