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

const Categories = observer(() => {
  const [{ users, getModerators }] = useState(() => new UserStore());
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

  const renderAction = (value: string, rowData: any) => {
    return (
      <Link href={`/admin/categories/${rowData.slug}`}>
        <Button type="secondary" ghost auto scale={0.5}>
          Edit
        </Button>
      </Link>
    );
  };

  return (
    <Auth>
      <AdminNavbar title="Categories" description="Categories" />

      <div className="page-container top-100">
        <Sidebar active="categories" />

        <main className="main for-admin">
          <SearchHeading
            title={`Categories (${categories.length})`}
            onChange={handleSearch}
          />
          <Link href="/admin/categories/new">
            <Button type="secondary" auto scale={0.7} icon={<Plus />}>
              Add
            </Button>
          </Link>
          <Spacer />
          <Table width={'100%'} data={categories}>
            <Table.Column prop="title" label="Title" />
            <Table.Column prop="color" label="color" render={renderColor} />
            <Table.Column prop="discussion" label="discussion" />
            <Table.Column prop="authRequired" label="Authentication" />
            <Table.Column prop="action" label="action" render={renderAction} />
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

export default Categories;
