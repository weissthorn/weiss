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
import { format } from 'date-fns';
import { es, fr, enUS } from 'date-fns/locale';
import AdminNavbar from 'components/admin/Navbar';
import SearchHeading from 'components/SearchHeading';
import Sidebar from 'components/admin/Sidebar';
import Auth from 'components/admin/Auth';
import ReportStore from 'stores/report';
import { reportProp } from 'interfaces/report';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import DiscussionStore from 'stores/discussion';
import SettingsStore from 'stores/settings';
import { useTranslation, Translation } from 'components/intl/Translation';

const Reports = observer(() => {
  const [{ updateDiscussion }] = useState(() => new DiscussionStore());
  const [{ settings, getSettings }] = useState(() => new SettingsStore());

  const [
    {
      loading,
      page,
      limit,
      total,
      reports,
      setPage,
      getReports,
      updateReport,
      searchReport
    }
  ] = useState(() => new ReportStore());

  useEffect(() => {
    getSettings();
    getReports();
  }, []);

  const paginate = (val: number) => {
    setPage(val);
    getReports();
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
        getReports();
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

  const renderDate = (value: string, rowData: any) => {
    const date: any = rowData?.createdAt
      ? format(new Date(rowData?.createdAt), 'MMM d, yyyy @ h:mm a', {
          locale:
            settings?.language === 'es'
              ? es
              : settings?.language === 'fr'
              ? fr
              : settings?.language === 'en'
              ? enUS
              : null
        })
      : '';
    return <span className="locale-time">{date}</span>;
  };

  const renderType = (value: string) => {
    return <Translation lang={settings?.language} value={value} />;
  };

  const renderView = (value: string, rowData: reportProp) => {
    return (
      <Link target={'_blank'} icon href={`/d/${rowData.slug}`}>
        {useTranslation({
          lang: settings?.language,
          value: 'View'
        })}
      </Link>
    );
  };

  const renderAction = (value: string, rowData: reportProp) => {
    return (
      <Select
        placeholder={useTranslation({
          lang: settings?.language,
          value: 'Change status'
        })}
        // value={rowData.status}
        onChange={(value: any) => handleChange(value, rowData.post.id!)}
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
          value: 'Reports'
        })}
        description={useTranslation({
          lang: settings?.language,
          value: 'Reports'
        })}
      />
      <Toaster />
      <div className="page-container top-100">
        <Sidebar active="reports" lang={settings?.language} />

        <main className="main for-admin">
          <SearchHeading
            title={`${useTranslation({
              lang: settings?.language,
              value: 'Reports'
            })} (${reports.length})`}
            withoutSearch={true}
          />

          <Table width={'100%'} data={reports}>
            <Table.Column
              prop="title"
              label={useTranslation({
                lang: settings?.language,
                value: 'Title'
              })}
            />
            <Table.Column
              prop="type"
              label={useTranslation({
                lang: settings?.language,
                value: 'Type'
              })}
              render={renderType}
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
              prop="createdAt"
              label={useTranslation({
                lang: settings?.language,
                value: 'Date'
              })}
              render={renderDate}
            />
            <Table.Column
              prop="slug"
              label={useTranslation({
                lang: settings?.language,
                value: 'Action'
              })}
              render={renderAction}
            />
            <Table.Column prop="post" label="" render={renderView} />
          </Table>

          {loading ? (
            <Text>
              <Translation lang={settings?.language} value="Loading" />
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

export default Reports;
