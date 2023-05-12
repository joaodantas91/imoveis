import Container from "@/components/Container";
import { PropertyCard } from "@/components/PropertyCard";
import { Section } from "@/components/Section";
import localDB from "@/public/db/properties";
import { Properties } from "@/types/properties";
import { useRouter } from "next/router";
import styles from '../styles.module.scss';

function SearchResults() {
  const router = useRouter()
  const query = router.query
  const properties: Properties[] = [];

  if (query.properties) {
    const parsedQuery: string[] = JSON.parse(query.properties as string);
    {
      parsedQuery.forEach((id: string) => {
        const property = localDB.find(property => property.id === id);
        if (property) {
          properties.push(property)
        }
      })
    }

  }

  return (
    <Section>
      <Container>
        <div className={styles.grid}>
          {properties.map((item) => (
            <PropertyCard key={item.id} data={item} href={`/${item.id}`} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default SearchResults;