import Container from '@/components/Container';
import { PropertyCard } from '@/components/PropertyCard';
import { Section } from '@/components/Section';
import localDB from '@/public/db/properties'
import styles from './styles.module.scss';
import { HomeBanner } from '@/components/HomeBanner';

export default function Page() {
  return (
    <>
      <HomeBanner />
      <Section>
        <Container>
          <h2 className={styles["module-title"]}>Destaques</h2>
          <div className={styles.grid}>
            {localDB.map((item) => (
              <PropertyCard key={item.id} data={item} href={`/${item.id}`} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}