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
import ReportStore from 'stores/report';
import { reportProp } from 'interfaces/report';
import toast, { Toaster } from 'react-hot-toast';

const Reports = observer(() => {
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
    getReports();
  }, []);

  const paginate = (val: number) => {
    setPage(val);
    getReports();
  };

  const handleChange = async (status: string, id: string) => {
    await updateReport({ status, id }).then((res: any) => {
      if (res.success) {
        toast.success('Report status updated');
        getReports();
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

  const renderView = (value: string, rowData: reportProp) => {
    return (
      <Link target={'_blank'} icon href={`/d/${rowData.slug}`}>
        View
      </Link>
    );
  };

  const renderAction = (value: string, rowData: reportProp) => {
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
      <AdminNavbar title="Reports" description="Reports" />
      <Toaster />
      <div className="page-container top-100">
        <Sidebar active="reports" />

        <main className="main">
          <SearchHeading
            title={`Reports (${reports.length})`}
            withoutSearch={true}
          />

          <Table width={'100%'} data={reports}>
            <Table.Column prop="title" label="Title" />
            <Table.Column prop="type" label="Type" />
            <Table.Column prop="status" label="status" render={renderStatus} />
            <Table.Column prop="action" label="action" render={renderAction} />
            <Table.Column prop="view" label="" render={renderView} />
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

export default Reports;
