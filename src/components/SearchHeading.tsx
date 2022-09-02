import { Input, Text } from '@geist-ui/core';
import { Search } from '@geist-ui/icons';
import { useState } from 'react';

type searchProps = {
  title: string;
  placeholder?: string;
  value?: string;
  withoutSearch?: boolean;
  onChange?: (e: any) => void;
};

const SearchHeading = (props: searchProps) => {
  const { title, placeholder, withoutSearch, onChange } = props;

  return (
    <div className="search-heading">
      <div className="item">
        <Text h3>{title}</Text>
      </div>
      <div className="item">
        {withoutSearch === false || withoutSearch === undefined ? (
          <Input
            width={'100%'}
            placeholder={placeholder ? placeholder : 'Search....'}
            iconRight={<Search />}
            onChange={onChange}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SearchHeading;
