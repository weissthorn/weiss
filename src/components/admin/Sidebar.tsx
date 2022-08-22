import { Link } from '@geist-ui/core';
import { Activity, Archive, Users, Layers, Settings } from '@geist-ui/icons';

type sidebarProps = {
  active: string;
};

const Sidebar = (props: sidebarProps) => {
  const { active } = props;

  return (
    <aside>
      <div className="sidenav">
        <Link
          href="/admin"
          className={`link ${active === 'dashboard' ? 'active' : ''}`}
        >
          <Activity className="icon" />
          &nbsp;&nbsp;<span>Dashboard</span>
        </Link>
        <Link
          href="/admin/users"
          className={`link ${active === 'users' ? 'active' : ''}`}
        >
          <Users className="icon" />
          &nbsp;&nbsp;<span>Users</span>
        </Link>
        <Link
          href="/admin/discussions"
          className={`link ${active === 'discussions' ? 'active' : ''}`}
        >
          <Archive className="icon" />
          &nbsp;&nbsp;<span>Discussions</span>
        </Link>
        <Link
          href="/admin/categories"
          className={`link ${active === 'categories' ? 'active' : ''}`}
        >
          <Layers className="icon" />
          &nbsp;&nbsp;<span>Categories</span>
        </Link>
        <Link
          href="/admin/settings"
          className={`link ${active === 'settings' ? 'active' : ''}`}
        >
          <Settings className="icon" />
          &nbsp;&nbsp;<span>Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
