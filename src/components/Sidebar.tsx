import { useState, useEffect } from 'react';
import { Link, Spacer } from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import CategoryStore from 'stores/category';

type sidebarProps = {
  active: string;
  button: JSX.Element | string;
  fluid?: boolean;
  advert?: JSX.Element | string;
};

const Sidebar = observer((props: sidebarProps) => {
  const { active, button, fluid, advert } = props;
  const [{ categories, getCategories }] = useState(() => new CategoryStore());

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <aside>
      <div className={`sidenav ${fluid ? 'fluid' : ''} `}>
        {button}
        <Spacer h={2.5} />
        {categories.map((item, key) => (
          <Link
            key={key}
            href={`/category/${item.slug}`}
            className={`link ${active === item.slug ? 'active' : ''}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="category-icon"
              style={{ fill: item.color }}
              viewBox="0 0 512 512"
            >
              <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
            </svg>{' '}
            &nbsp;&nbsp;
            <span style={{ color: active === item.slug ? item.color : '' }}>
              {item.title}
            </span>
          </Link>
        ))}

        {advert}
      </div>
    </aside>
  );
});

export default Sidebar;
