import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { Link, Spacer } from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import CategoryStore from 'stores/category';

const CategoryHeader = observer(() => {
  const [{ categories, getCategories }] = useState(() => new CategoryStore());

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="mobile" style={{ fontSize: 14, fontWeight: '500' }}>
      Categories:{' '}
      {categories.slice().map((item, key) => (
        <NextLink key={key} href={`/category/${item.slug}`}>
          <Link className={`link`}>
            <span className="sidelink" style={{ color: item.color }}>
              {item.title} &nbsp;
              {key + 1 !== categories.length && (
                <span style={{ color: '#000' }}>|</span>
              )}
              &nbsp;
            </span>
          </Link>
        </NextLink>
      ))}
      <Spacer h={1} />
    </div>
  );
});

export default CategoryHeader;
