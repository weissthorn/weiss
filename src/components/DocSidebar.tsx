import { Link, Spacer, Collapse } from '@geist-ui/core';

type sidebarProps = {
  active: string;
  fluid?: boolean;
  advert?: JSX.Element | string;
};

const Sidebar = (props: sidebarProps) => {
  const { active, fluid, advert } = props;
  const menu: any = [];
  return (
    <aside>
      <div className={`sidenav ${fluid ? 'fluid' : ''} `}>
        {menu.map((item, key) => (
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

        <Collapse.Group>
          <Collapse title="Users" initialVisible className="sidebar-dropdown">
            <Link href={`/category/`} className={`link small`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="category-icon"
                style={{ fill: '#555' }}
                viewBox="0 0 512 512"
              >
                <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
              </svg>{' '}
              &nbsp;&nbsp;
              <span>Update user</span>
            </Link>
            <Link href={`/category/`} className={`link small`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="category-icon"
                style={{ fill: '#666' }}
                viewBox="0 0 512 512"
              >
                <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
              </svg>{' '}
              &nbsp;&nbsp;
              <span className="active">Create user</span>
            </Link>
          </Collapse>
          <Collapse title="Categories" className="sidebar-dropdown">
            <Link href={`/category/`} className={`link small`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="category-icon"
                style={{ fill: '#666' }}
                viewBox="0 0 512 512"
              >
                <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
              </svg>{' '}
              &nbsp;&nbsp;
              <span>Create category</span>
            </Link>
          </Collapse>
        </Collapse.Group>

        {advert}
      </div>
    </aside>
  );
};

export default Sidebar;
