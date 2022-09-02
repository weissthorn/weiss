import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import { Card, Text, Grid, Input } from '@geist-ui/core';
import CountUp from 'react-countup';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});
import Navbar from 'components/admin/Navbar';
import Sidebar from 'components/admin/Sidebar';
import Auth from 'components/admin/Auth';
import DateModal from 'components/modals/DateModal';
import AnalyticsStore from 'stores/analytics';

const Dashboard = observer(() => {
  const [modal, toggleDate] = useState(false);
  const [
    {
      loading,
      users,
      discussions,
      pageviews,
      getUsers,
      getDiscussions,
      getPageviews
    }
  ] = useState(() => new AnalyticsStore());
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  useEffect(() => {
    let from = moment(date[0].startDate).format('YYYY-MM-DD');
    let to = moment(date[0].endDate).format('YYYY-MM-DD');
    getUsers(from, to);
    getDiscussions(from, to);
    getPageviews(from, to);
  }, []);

  const processAnalytics = async () => {
    let from = moment(date[0].startDate).format('YYYY-MM-DD');
    let to = moment(date[0].endDate).format('YYYY-MM-DD');
    getUsers(from, to);
    getDiscussions(from, to);
    getPageviews(from, to);
    toggleDate(false);
  };

  const series = [
    {
      name: 'Users',
      data: users.map((item: any) => item.count)
    },
    {
      name: 'Discussions',
      data: discussions.map((item: any) => item.count)
    },
    {
      name: 'Pageviews',
      data: pageviews.map((item: any) => item.count)
    }
  ];
  const options: any = {
    chart: {
      height: 350,
      type: 'area'
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: discussions.map((item: any) => item.day)
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  };

  const userTotal = users
    .map((item: any) => item.count)
    .reduce((a: number, b: number) => a + b, 0);

  const discussionTotal = discussions
    .map((item: any) => item.count)
    .reduce((a: number, b: number) => a + b, 0);

  const pageviewTotal = pageviews
    .map((item: any) => item.count)
    .reduce((a: number, b: number) => a + b, 0);

  return (
    <Auth>
      <Navbar title="Dashboard" description="Dashboard" />
      <DateModal
        show={modal}
        date={date}
        toggleModal={() => toggleDate(!modal)}
        setDate={setDate}
        actionTrigger={processAnalytics}
      />
      <div className="page-container top-100">
        <Sidebar active="dashboard" />

        <main className="main">
          <div className="dashboard-header">
            <div className="item">
              <Text h3>Dashboard</Text>
            </div>
            <div className="item">
              <Input
                width="100%"
                placeholder={`${moment(date[0].startDate).format(
                  'MMM D, YYYY'
                )} - ${moment(date[0].endDate).format('MMM D, YYYY')}`}
                onClick={() => toggleDate(true)}
              />
            </div>
          </div>

          <Grid.Container gap={2}>
            <Grid xs={24} md={8}>
              <Card shadow width={'100%'}>
                <Text h3 my={0}>
                  <CountUp prefix="" start={0} end={userTotal} separator="," />
                </Text>
                <Text h6 my={0}>
                  Users
                </Text>
              </Card>
            </Grid>
            <Grid xs={24} md={8}>
              <Card shadow width={'100%'}>
                <Text h3 my={0}>
                  <CountUp
                    prefix=""
                    start={0}
                    end={discussionTotal}
                    separator=","
                  />
                </Text>
                <Text h6 my={0}>
                  Discussions
                </Text>
              </Card>
            </Grid>
            <Grid xs={24} md={8}>
              <Card shadow width={'100%'}>
                <Text h3 my={0}>
                  <CountUp
                    prefix=""
                    start={0}
                    end={pageviewTotal}
                    separator=","
                  />
                </Text>
                <Text h6 my={0}>
                  Pageviews
                </Text>
              </Card>
            </Grid>
            <Grid xs={24} md={24}>
              <Card shadow width={'100%'}>
                <Chart series={series} options={options} />
              </Card>
            </Grid>
          </Grid.Container>
        </main>
      </div>
    </Auth>
  );
});

export default Dashboard;
