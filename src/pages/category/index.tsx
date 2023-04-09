import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Card, Text, Grid, Link } from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import Navbar from 'components/Navbar';
import CategoryStore from 'stores/category';
import SettingsStore from 'stores/settings';
import { Translation, useTranslation } from 'components/intl/Translation';

const Category = observer(() => {
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [{ loading, categories, getCategories }] = useState(
    () => new CategoryStore()
  );

  useEffect(() => {
    getSettings();
    getCategories();
  }, []);

  return (
    <div>
      <Navbar
        title={useTranslation({
          lang: settings?.language,
          value: 'Categories'
        })}
        description="Categories"
      />
      <div className="page-container top-100">
        <h2>
          <Translation lang={settings?.language} value="Categories" />
        </h2>
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
