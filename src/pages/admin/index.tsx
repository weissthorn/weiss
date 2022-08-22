import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Text, Grid, Select } from '@geist-ui/core';
import CountUp from 'react-countup';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});
import Navbar from 'components/admin/Navbar';
import Sidebar from 'components/admin/Sidebar';
import DateModal from 'components/modals/DateModal';

const Dashboard = observer(() => {
  const series = [
    {
      name: 'Discussions',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Pageviews',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];
  const options: any = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z'
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  };

  return (
    <div>
      <Navbar title="Users" description="Weiss" />
      <DateModal show={true} />
      <div className="page-container top-100">
        <Sidebar active="dashboard" />

        <main className="main">
          <div className="dashboard-header">
            <div className="item">
              <Text h3>Dashboard</Text>
            </div>
            <div className="item">
              <Select value={'today'}>
                <Select.Option value="today">Today</Select.Option>
                <Select.Option value="yesterday">Yesterday</Select.Option>
                <Select.Option value="week">This week</Select.Option>
                <Select.Option value="last-week">Last week</Select.Option>
                <Select.Option value="month">This month</Select.Option>
                <Select.Option value="last-month">Last month</Select.Option>
                <Select.Option value="custom">Date range</Select.Option>
              </Select>
            </div>
          </div>

          <Grid.Container gap={2}>
            <Grid xs={24} md={8}>
              <Card shadow width={'100%'}>
                <Text h3 my={0}>
                  <CountUp prefix="" start={0} end={134449} separator="," />
                </Text>
                <Text h6 my={0}>
                  Users
                </Text>
              </Card>
            </Grid>
            <Grid xs={24} md={8}>
              <Card shadow width={'100%'}>
                <Text h3 my={0}>
                  <CountUp prefix="" start={0} end={5699439} separator="," />
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
                    end={45348499439}
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
    </div>
  );
});

export default Dashboard;
