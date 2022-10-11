import { headerCategories } from 'helpers/header-categories';

const HeaderCategories = () => {
  return (
    <nav className='header-categories'>
        <ul>
            {headerCategories.map(category => {
                return <li key={category.title}>{category.title}</li>
            })}
        </ul>
    </nav>
  )
}

export default HeaderCategories;