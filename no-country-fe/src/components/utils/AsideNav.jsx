import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import LogoBrand from 'public/images/brand-logo.png';

const AsideNav = ({ sections }) => {
  return (
    <aside classNameName='aside-nav'>
      <div classNameName='aside-nav--logo'>
        <Image src={LogoBrand}/>
      </div>
      <div classNameName='aside-nav--action-buttons'>
        <button type='button'>Comprar</button>
        <button type='button'>Vender</button>
      </div>
      {sections.map(section => (
        <div key={section.title} classNameName={`${section.title}--aside__section aside-nav--section`}>
          <h3>{section.title}</h3>
          <ul>
            {section.options.map(option => (
              <li key={option.option_name}>
                <Link href={option.link}>
                  {option.option_name}
                </Link> 
              </li>
            ))
            }
          </ul>
        </div>
      )
      )}
    </aside>
  )
}

AsideNav.propTypes = {
    sections: PropTypes.array,
}

export default AsideNav
