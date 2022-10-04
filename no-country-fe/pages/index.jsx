import AsideNav from 'src/components/utils/AsideNav'
import { mainAsideNavSections } from 'helpers/aside-nav';

export default function Home() {
  return (
    <div>
      <AsideNav sections={mainAsideNavSections} />
    </div>
  )
}
