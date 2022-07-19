import { CategoryListProps } from './CategoryList.props'
import Link from "next/link"
import styles from './CategoryList.module.scss'

const CategoryList = ({data}: CategoryListProps): JSX.Element => {
  return (
      <ul className={styles.list}>
        <h3>Статьи</h3>
        {data.map((list)=>{
          return (
              <li key={list.id}><Link href={`/category/${list.attributes.slug}`}><a>{list.attributes.name}</a></Link></li>
          )
        })}
      </ul>
  );
};

export default CategoryList
