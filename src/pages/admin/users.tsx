import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Text,
  Link,
  Badge,
  Table,
  Pagination,
  Button,
  Loading
} from '@geist-ui/core';
import { ChevronRightCircle, ChevronLeftCircle } from '@geist-ui/icons';
import AdminNavbar from 'components/admin/Navbar';
import SearchHeading from 'components/SearchHeading';
import UserModal from 'components/modals/UserModal';
import Sidebar from 'components/admin/Sidebar';
import UserStore from 'stores/user';
import { userProp } from 'interfaces/user';
import toast, { Toaster } from 'react-hot-toast';
import Auth from 'components/admin/Auth';

const Admin = observer(() => {
  const [modal, toggleModal] = useState(false);
  const [
    {
      loading,
      page,
      limit,
      total,
      user,
      users,
      setPage,
      setUser,
      getUsers,
      updateUser,
      searchUsers
    }
  ] = useState(() => new UserStore());

  useEffect(() => {
    getUsers();
  }, []);

  const paginate = (val: number) => {
    setPage(val);
    getUsers();
  };

  const handleSearch = (e: any) => {
    setPage(1);
    let value = e.target.value;
    value.length ? searchUsers(value) : getUsers();
  };

  const handleChange = async (val: userProp) => {
    await updateUser(val).then((res: any) => {
      if (res.success) {
        setUser(val);
        getUsers();
        toast.success('Profile updated!');
      } else {
        toast.error('Unable to update profile. Please try again.');
      }
    });
  };

  const handleEdit = (val: userProp) => {
    setUser(val);
    toggleModal(true);
  };

  const renderStatus = (value: string, rowData: any[], index: number) => {
    return value === 'active' ? (
      <Badge type="success">{value}</Badge>
    ) : (
      <Badge type="error">{value}</Badge>
    );
  };

  const renderAction = (value: string, rowData: any, index: number) => {
    return (
      <Button
        type="secondary"
        ghost
        auto
        scale={0.5}
        onClick={() => handleEdit(rowData)}
      >
        Edit
      </Button>
    );
  };

  const renderView = (value: string, rowData: any, index: number) => {
    return (
      <Link
        target="_blank"
        type="secondary"
        icon
        scale={0.7}
        href={`/u/${rowData.username}`}
      >
        View
      </Link>
    );
  };

  return (
    <Auth>
      <AdminNavbar title="Users" description="Weiss" />
      <Toaster />
      <UserModal
        loading={loading}
        show={modal}
        data={user}
        toggleModal={() => toggleModal(!modal)}
        actionTrigger={handleChange}
      />
      <div className="page-container top-100">
        <Sidebar active="users" />

        <main className="main">
          <SearchHeading
            title={`Users (${users.length})`}
            onChange={handleSearch}
          />

          <Table
            width={'100%'}
            data={users}
            // onChange={(value: any) => setData(value)}
          >
            <Table.Column prop="name" label="Name" className="capitalize" />
            <Table.Column prop="role" label="Role" />
            <Table.Column prop="status" label="status" render={renderStatus} />
            <Table.Column
              prop="action"
              label="action"
              width={150}
              render={renderAction}
            />
            <Table.Column
              prop="action2"
              label=""
              width={150}
              render={renderView}
            />
          </Table>
          {loading ? (
            <Text>
              <Loading>Loading</Loading>
            </Text>
          ) : (
            ''
          )}

          {total! >= limit ? (
            <div className="pagination">
              <Pagination
                count={Math.round(total! / limit)}
                initialPage={page}
                limit={limit}
                onChange={paginate}
              >
                <Pagination.Next>
                  <ChevronRightCircle />
                </Pagination.Next>
                <Pagination.Previous>
                  <ChevronLeftCircle />
                </Pagination.Previous>
              </Pagination>
            </div>
          ) : (
            ''
          )}
        </main>
      </div>
    </Auth>
  );
});

export default Admin;
