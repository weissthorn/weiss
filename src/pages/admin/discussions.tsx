import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Badge,
  Table,
  Pagination,
  Link,
  Select,
  Loading,
  Text
} from '@geist-ui/core';
import { ChevronRightCircle, ChevronLeftCircle } from '@geist-ui/icons';
import moment from 'moment';
import AdminNavbar from 'components/admin/Navbar';
import SearchHeading from 'components/SearchHeading';
import Sidebar from 'components/admin/Sidebar';
import Auth from 'components/admin/Auth';
import DiscussionStore from 'stores/discussion';
import { discussionProp } from 'interfaces/discussion';
import toast, { Toaster } from 'react-hot-toast';

const Discussions = observer(() => {
  const [
    {
      loading,
      page,
      limit,
      total,
      discussions,
      setPage,
      getDiscussions,
      updateDiscussion,
      searchDiscussion
    }
  ] = useState(() => new DiscussionStore());

  useEffect(() => {
    getDiscussions();
  }, []);

  const paginate = (val: number) => {
    setPage(val);
    getDiscussions();
  };

  const handleSearch = (e: any) => {
    setPage(1);
    let value = e.target.value;
    value = value.trim();
    value.length ? searchDiscussion(value) : getDiscussions();
  };

  const handleChange = async (status: string, id: string) => {
    await updateDiscussion({ status, id }).then((res: any) => {
      if (res.success) {
        toast.success('Discussion status updated');
        getDiscussions();
      } else {
        toast.error('Unable to update status! Please try again later.');
      }
    });
  };

  const renderStatus = (value: string) => {
    return value === 'answered' ? (
      <Badge type="success">{value}</Badge>
    ) : value === 'unanswered' ? (
      <Badge type="warning">{value}</Badge>
    ) : value === 'banned' ? (
      <Badge type="error">{value}</Badge>
    ) : (
      <></>
    );
  };

  const renderView = (value: string, rowData: discussionProp) => {
    return (
      <Link target={'_blank'} icon href={`/d/${rowData.slug}`}>
        View
      </Link>
    );
  };

  const renderAction = (value: string, rowData: discussionProp) => {
    return (
      <Select
        placeholder="Change status"
        value={value}
        onChange={(value: any) => handleChange(value, rowData.id!)}
      >
        <Select.Option value="answered">Answered</Select.Option>
        <Select.Option value="unanswered">Unanswered</Select.Option>
        <Select.Option value="banned">Banned</Select.Option>
      </Select>
    );
  };

  return (
    <Auth>
      <AdminNavbar title="Discussions" description="Discussions" />
      <Toaster />
      <div className="page-container top-100">
        <Sidebar active="discussions" />

        <main className="main for-admin">
          <SearchHeading
            title={`Discussions (${discussions.length})`}
            onChange={handleSearch}
          />

          <Table
            width={'100%'}
            data={discussions.map((item) => ({
              ...item,
              view: item.view?.toString()
            }))}
          >
            <Table.Column prop="title" label="Title" />
            <Table.Column prop="view" label="View" />
            <Table.Column prop="status" label="status" render={renderStatus} />
            <Table.Column prop="action" label="action" render={renderAction} />
            <Table.Column prop="updatedAt" label="" render={renderView} />
          </Table>

          {loading ? (
            <Text>
              <Loading>Loading</Loading>
            </Text>
          ) : (
            ''
          )}

          {total >= limit ? (
            <div className="pagination">
              <Pagination
                count={Math.round(total / limit)}
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

export default Discussions;
