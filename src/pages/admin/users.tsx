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
import moment from 'moment';

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

  const renderStatus = (value: string, rowData: any[]) => {
    let status: any =
      value === 'active' ? (
        <Badge type="success">{value}</Badge>
      ) : value === 'pending' ? (
        <Badge type="warning">pending verification</Badge>
      ) : (
        <Badge type="error">{value}</Badge>
      );
    return status;
  };

  const renderDate = (value: string, rowData: any) => {
    const date: any = moment(rowData.createdAt).format('MMM D, YYYY @ h:mm A');
    return date;
  };

  const renderAction = (value: string, rowData: any) => {
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

  const renderView = (value: string, rowData: any) => {
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
      <AdminNavbar title="Users" description="Users" />
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

        <main className="main for-admin">
          <SearchHeading
            title={`Users (${users.length})`}
            onChange={handleSearch}
          />

          <Table width={'100%'} data={users}>
            <Table.Column prop="name" label="Name" className="capitalize" />
            <Table.Column prop="role" label="Role" />
            <Table.Column prop="status" label="Status" render={renderStatus} />
            <Table.Column
              // width={220}
              prop="createdAt"
              label="Date"
              render={renderDate}
            />
            <Table.Column
              prop="action"
              label="action"
              // width={100}
              render={renderAction}
            />
            <Table.Column
              prop="action2"
              label=""
              // width={50}
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
