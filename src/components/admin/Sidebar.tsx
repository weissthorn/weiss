import { Link, Tooltip } from '@geist-ui/core';
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
    <aside className="for-admin">
      <div className="sidenav">
        <NextLink href="/admin">
          <Link className={`link ${active === 'dashboard' ? 'active' : ''}`}>
            <Tooltip text="Dashboard" placement="right">
              <Activity
                className="icon"
                color={active === 'dashboard' ? '#000' : '#999'}
              />
            </Tooltip>
            <span className="sidelink">Dashboard</span>
          </Link>
        </NextLink>
        <NextLink href="/admin/users">
          <Link className={`link ${active === 'users' ? 'active' : ''}`}>
            <Tooltip text="Users" placement="right">
              <Users
                className="icon"
                color={active === 'users' ? '#000' : '#999'}
              />
            </Tooltip>
            <span className="sidelink">Users</span>
          </Link>
        </NextLink>

        <NextLink href="/admin/discussions">
          <Link className={`link ${active === 'discussions' ? 'active' : ''}`}>
            <Tooltip text="Discussions" placement="right">
              <Archive
                className="icon"
                color={active === 'discussions' ? '#000' : '#999'}
              />
            </Tooltip>

            <span className="sidelink">Discussions</span>
          </Link>
        </NextLink>

        <NextLink href="/admin/reports">
          <Link className={`link ${active === 'reports' ? 'active' : ''}`}>
            <Tooltip text="Reports" placement="right">
              <AlertTriangle
                className="icon"
                color={active === 'reports' ? '#000' : '#999'}
              />
            </Tooltip>

            <span className="sidelink">Reports</span>
          </Link>
        </NextLink>

        <NextLink href="/admin/categories">
          <Link className={`link ${active === 'categories' ? 'active' : ''}`}>
            <Tooltip text="Categories" placement="right">
              <Layers
                className="icon"
                color={active === 'categories' ? '#000' : '#999'}
              />
            </Tooltip>

            <span className="sidelink">Categories</span>
          </Link>
        </NextLink>

        <NextLink href="/admin/settings">
          <Link className={`link ${active === 'settings' ? 'active' : ''}`}>
            <Tooltip text="Settings" placement="right">
              <Settings
                className="icon"
                color={active === 'settings' ? '#000' : '#999'}
              />
            </Tooltip>

            <span className="sidelink">Settings</span>
          </Link>
        </NextLink>
      </div>
    </aside>
  );
};

export default Sidebar;
