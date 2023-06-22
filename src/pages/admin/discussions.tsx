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
import AdminNavbar from 'components/admin/Navbar';
import SearchHeading from 'components/SearchHeading';
import Sidebar from 'components/admin/Sidebar';
import Auth from 'components/admin/Auth';
import DiscussionStore from 'stores/discussion';
import { discussionProp } from 'interfaces/discussion';
import toast, { Toaster } from 'react-hot-toast';
import SettingsStore from 'stores/settings';
import { useTranslation, Translation } from 'components/intl/Translation';

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
  const [{ settings, getSettings }] = useState(() => new SettingsStore());

  useEffect(() => {
    getSettings();
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
        toast.success(
          useTranslation({
            lang: settings?.language,
            value: 'Discussion status updated'
          })
        );
        getDiscussions();
      } else {
        toast.error(
          useTranslation({
            lang: settings?.language,
            value: 'Unable to update status! Please try again later.'
          })
        );
      }
    });
  };

  const renderStatus = (value: string) => {
    return value === 'answered' ? (
      <Badge type="success">
        <Translation lang={settings?.language} value="Answered" />
      </Badge>
    ) : value === 'unanswered' ? (
      <Badge type="warning">
        <Translation lang={settings?.language} value="Unanswered" />
      </Badge>
    ) : value === 'banned' ? (
      <Badge type="error">
        <Translation lang={settings?.language} value="Banned" />
      </Badge>
    ) : (
      <></>
    );
  };

  const renderView = (value: string, rowData: discussionProp) => {
    return (
      <Link target={'_blank'} icon href={`/d/${rowData.slug}`}>
        {useTranslation({
          lang: settings?.language,
          value: 'View'
        })}
      </Link>
    );
  };

  const renderAction = (value: string, rowData: discussionProp) => {
    return (
      <Select
        placeholder={useTranslation({
          lang: settings?.language,
          value: 'Change status'
        })}
        value={value}
        onChange={(value: any) => handleChange(value, rowData.id!)}
      >
        <Select.Option value="answered">
          <Translation lang={settings?.language} value="Answered" />
        </Select.Option>
        <Select.Option value="unanswered">
          <Translation lang={settings?.language} value="Unanswered" />
        </Select.Option>
        <Select.Option value="banned">
          <Translation lang={settings?.language} value="Banned" />
        </Select.Option>
      </Select>
    );
  };

  return (
    <Auth>
      <AdminNavbar
        title={useTranslation({
          lang: settings?.language,
          value: 'Discussions'
        })}
        description={useTranslation({
          lang: settings?.language,
          value: 'Discussions'
        })}
      />
      <Toaster />
      <div className="page-container top-100">
        <Sidebar active="discussions" lang={settings?.language} />

        <main className="main for-admin">
          <SearchHeading
            placeholder={`${useTranslation({
              lang: settings?.language,
              value: 'Search....'
            })}`}
            title={`${useTranslation({
              lang: settings?.language,
              value: 'Discussions'
            })} (${discussions.length})`}
            onChange={handleSearch}
          />

          <Table
            width={'100%'}
            data={discussions.map((item) => ({
              ...item,
              view: item.view?.toString()
            }))}
          >
            <Table.Column
              prop="title"
              label={useTranslation({
                lang: settings?.language,
                value: 'Title'
              })}
            />
            <Table.Column
              prop="view"
              label={useTranslation({
                lang: settings?.language,
                value: 'View'
              })}
            />
            <Table.Column
              prop="status"
              label={useTranslation({
                lang: settings?.language,
                value: 'Status'
              })}
              render={renderStatus}
            />
            <Table.Column
              prop="action"
              label={useTranslation({
                lang: settings?.language,
                value: 'Action'
              })}
              render={renderAction}
            />
            <Table.Column prop="updatedAt" label="" render={renderView} />
          </Table>

          {loading ? (
            <Text>
              <Loading>
                <Translation lang={settings?.language} value="Loading" />
              </Loading>
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
