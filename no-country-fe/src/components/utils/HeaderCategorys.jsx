import { headerCategorys } from 'helpers/header-categorys';

const HeaderCategorys = () => {
  return (
    <nav className='header-categorys'>
        <ul>
            {headerCategorys.map(category => {
                return <li key={category.title}>{category.title}</li>
            })}
        </ul>
    </nav>
  )
}

export default HeaderCategorys