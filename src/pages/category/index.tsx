import { Card, Text, Tabs, Pagination, Grid, Link } from '@geist-ui/core';
import { ChevronRightCircle, ChevronLeftCircle, Circle } from '@geist-ui/icons';
import Navbar from 'components/Navbar';
import Post from 'components/Post';

export default function Home() {
  const redirect = (url: string) => window.open(url);
  const types = [
    'secondary',
    'success',
    'warning',
    'error',
    'dark',
    'alert',
    'purple',
    'violet',
    'cyan',
    'green'
  ];

  return (
    <div>
      <Navbar title="Home" description="Weiss - Home" />
      <div className="page-container top-100">
        <h2>Categories</h2>
        <Grid.Container gap={1} mb="100px">
          {types.map((type) => (
            <Grid xs={24} md={8} key={type}>
              <Link href="/" width="100%">
                <Card
                  type={'default'}
                  width="100%"
                  style={{ background: 'orange' }}
                >
                  <Text h4 my={0} style={{ textTransform: 'uppercase' }}>
                    {type}
                  </Text>
                  <Text p>
                    {type} Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Corporis asperiores
                  </Text>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </div>
  );
}
