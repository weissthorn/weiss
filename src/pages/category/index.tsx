import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Card, Text, Grid, Link } from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import Navbar from 'components/Navbar';
import CategoryStore from 'stores/category';

const Category = observer(() => {
  const [{ loading, categories, getCategories }] = useState(
    () => new CategoryStore()
  );

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Navbar title="Categories" description="Categories" />
      <div className="page-container top-100">
        <h2>Categories</h2>
        <Grid.Container gap={1} mb="100px">
          {categories.slice().map((item) => (
            <Grid xs={24} md={8} key={item.id}>
              <NextLink href={`/category/${item.slug}`}>
                <Link width="100%">
                  <Card
                    type={'default'}
                    width="100%"
                    style={{ background: item.color }}
                    className="text-category"
                  >
                    <Text
                      h4
                      my={0}
                      // style={{ textTransform: 'uppercase' }}
                    >
                      {item.title}
                    </Text>
                    <Text p>{item.description}</Text>
                  </Card>
                </Link>
              </NextLink>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </div>
  );
});

export default Category;
