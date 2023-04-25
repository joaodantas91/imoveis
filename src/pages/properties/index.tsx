import Container from '@/components/Container';
import { PropertyCard } from '@/components/PropertyCard';
import localDB from '@/public/db/properties'

import styles from './styles.module.scss';


export default function Porperties() {
  return (
    <Container>
      <div className={styles.grid}>
        {localDB.map((item) => (
          <PropertyCard key={item.id} data={item} href={`/properties/${item.id}`} />
        ))}
      </div>
      
    </Container>
  );
}