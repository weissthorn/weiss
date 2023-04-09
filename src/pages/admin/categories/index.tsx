import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Table,
  Button,
  Spacer,
  Text,
  Loading,
  Pagination
} from '@geist-ui/core';
import { ChevronRightCircle, ChevronLeftCircle, Plus } from '@geist-ui/icons';
import Link from 'next/link';
import AdminNavbar from 'components/admin/Navbar';
import SearchHeading from 'components/SearchHeading';
import Sidebar from 'components/admin/Sidebar';
import Auth from 'components/admin/Auth';
import CategoryStore from 'stores/category';
import UserStore from 'stores/user';
import SettingsStore from 'stores/settings';
import { useTranslation, Translation } from 'components/intl/Translation';

const Categories = observer(() => {
  const [{ users, getModerators }] = useState(() => new UserStore());
  const [{ settings, getSettings }] = useState(() => new SettingsStore());
  const [
    {
      loading,
      total,
      page,
      limit,
      categories,
      setPage,
      getCategories,
      searchCategory
    }
  ] = useState(() => new CategoryStore());

  useEffect(() => {
    getSettings();
    getModerators();
    getCategories();
  }, []);

  const handleSearch = (e: any) => {
    setPage(1);
    let value = e.target.value;
    value.length ? searchCategory(value) : getCategories();
  };

  const renderColor = (value: string) => {
    return (
      <div
        className="custom-badge"
        style={
          { '--category-color': value, marginTop: 15 } as React.CSSProperties
        }
      ></div>
    );
  };

  const paginate = (val: number) => {
    setPage(val);
    getCategories();
  };

  const renderAuth = (value: string) => {
    return <Translation lang={settings?.language} value={value} />;
  };
  const renderAction = (value: string, rowData: any) => {
    return (
      <Link href={`/admin/categories/${rowData.slug}`}>
        <Button type="secondary" ghost auto scale={0.5}>
          <Translation lang={settings?.language} value="Edit" />
        </Button>
      </Link>
    );
  };

  return (
    <Auth>
      <AdminNavbar
        title={useTranslation({
          lang: settings?.language,
          value: 'Categories'
        })}
        description={useTranslation({
          lang: settings?.language,
          value: 'Categories'
        })}
      />

      <div className="page-container top-100">
        <Sidebar active="categories" lang={settings?.language} />

        <main className="main for-admin">
          <SearchHeading
            title={`${useTranslation({
              lang: settings?.language,
              value: 'Categories'
            })} (${categories.length})`}
            placeholder={useTranslation({
              lang: settings?.language,
              value: 'Search....'
            })}
            onChange={handleSearch}
          />
          <Link href="/admin/categories/new">
            <Button type="secondary" auto scale={0.7} icon={<Plus />}>
              <Translation lang={settings?.language} value="Add" />
            </Button>
          </Link>
          <Spacer />
          <Table width={'100%'} data={categories}>
            <Table.Column
              prop="title"
              label={useTranslation({
                lang: settings?.language,
                value: 'Title'
              })}
            />
            <Table.Column
              prop="color"
              label={useTranslation({
                lang: settings?.language,
                value: 'Color'
              })}
              render={renderColor}
            />
            <Table.Column
              prop="discussion"
              label={useTranslation({
                lang: settings?.language,
                value: 'Discussions'
              })}
            />
            <Table.Column
              prop="authRequired"
              label={useTranslation({
                lang: settings?.language,
                value: 'Authentication'
              })}
              render={renderAuth}
            />
            <Table.Column
              prop="action"
              label={useTranslation({
                lang: settings?.language,
                value: 'Action'
              })}
              render={renderAction}
            />
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

export default Categories;
