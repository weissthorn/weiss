import { Link } from '@geist-ui/core';
import NextLink from 'next/link';
import {
  Activity,
  Archive,
  AlertTriangle,
  Users,
  Layers,
  Settings
} from '@geist-ui/icons';

type sidebarProps = {
  active: string;
};

const Sidebar = (props: sidebarProps) => {
  const { active } = props;

  return (
    <aside>
      <div className="sidenav">
        <NextLink href="/admin">
          <Link className={`link ${active === 'dashboard' ? 'active' : ''}`}>
            <Activity className="icon" />
            &nbsp;&nbsp;<span>Dashboard</span>
          </Link>
        </NextLink>
        <NextLink href="/admin/users">
          <Link className={`link ${active === 'users' ? 'active' : ''}`}>
            <Users className="icon" />
            &nbsp;&nbsp;<span>Users</span>
          </Link>
        </NextLink>

        <NextLink href="/admin/discussions">
          <Link className={`link ${active === 'discussions' ? 'active' : ''}`}>
            <Archive className="icon" />
            &nbsp;&nbsp;<span>Discussions</span>
          </Link>
        </NextLink>

        <NextLink href="/admin/reports">
          <Link className={`link ${active === 'reports' ? 'active' : ''}`}>
            <AlertTriangle className="icon" />
            &nbsp;&nbsp;<span>Reports</span>
          </Link>
        </NextLink>

        <NextLink href="/admin/categories">
          <Link className={`link ${active === 'categories' ? 'active' : ''}`}>
            <Layers className="icon" />
            &nbsp;&nbsp;<span>Categories</span>
          </Link>
        </NextLink>

        <NextLink href="/admin/settings">
          <Link className={`link ${active === 'settings' ? 'active' : ''}`}>
            <Settings className="icon" />
            &nbsp;&nbsp;<span>Settings</span>
          </Link>
        </NextLink>
      </div>
    </aside>
  );
};

export default Sidebar;
