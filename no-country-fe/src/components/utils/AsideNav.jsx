import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import LogoBrand from 'public/images/brand-logo.png';

const AsideNav = ({ sections }) => {
  return (
    <aside className='aside-nav'>
      <div>
        <Image src={LogoBrand}/>
      </div>
      <div className='action-buttons'>
        <button type='button'>Comprar</button>
        <button type='button'>Vender</button>
      </div>
      {sections.map(section => (
            <div className={`${section.title}--aside__section`}>
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
