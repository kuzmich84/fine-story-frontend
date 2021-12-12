import { CategoryListProps } from './CategoryList.props'
import styles from './CategoryList.module.scss'

const CategoryList = ({data}: CategoryListProps): JSX.Element => {
  return (
      <ul className={styles.list}>
        <h3>Статьи</h3>
        {data.map((list)=>{
          return (
              <li key={list.id}><a href="#">{list.attributes.Name}</a></li>
          )
        })}
      </ul>
  );
};

export default CategoryList
