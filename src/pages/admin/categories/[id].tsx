import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Button,
  Spacer,
  Text,
  Select,
  Input,
  Textarea,
  Toggle
} from '@geist-ui/core';
import toast, { Toaster } from 'react-hot-toast';
import { ChromePicker } from 'react-color';
import { useRouter } from 'next/router';
import AdminNavbar from 'components/admin/Navbar';
import Sidebar from 'components/admin/Sidebar';
import Auth from 'components/admin/Auth';
import CategoryStore from 'stores/category';
import UserStore from 'stores/user';

const EditCategory = observer(() => {
  const router = useRouter();
  const { id } = router.query;
  const [showColor, toggleColor] = useState(false);
  const [{ users, getModerators }] = useState(() => new UserStore());
  const [{ loading, category, setCategory, getCategory, updateCategory }] =
    useState(() => new CategoryStore());
  const { title, description, color, authRequired, moderator } = category;

  useEffect(() => {
    getModerators();
    router.isReady ? getCategory(id) : null;
  }, [router]);

  const save = async () => {
    if (!title || title.length < 3) {
      toast.error('Title is too short. ');
    } else if (!description) {
      toast.error('Description is required');
    } else {
      setCategory({
        ...category,
        color: color ? color : '#000000',
        authRequired: authRequired ? authRequired : false,
        moderator: moderator ? moderator : []
      });

      await updateCategory(category).then((res: any) => {
        if (res.success) {
          toast.success('Category updated successfully!');
        } else {
          toast.error(res.message);
        }
      });
    }
  };

  return (
    <Auth>
      <Toaster />
      <AdminNavbar title="Edit a category" description="Edit a category" />

      <div className="page-container top-100">
        <Sidebar active="categories" />

        <main className="main for-admin">
          <div className="boxed">
            <h3>Edit category</h3>
            <Spacer />
            <Text>Color </Text>

            <div
              onClick={() => toggleColor(!showColor)}
              className="custom-badge with-border large"
              style={{ '--category-color': '#fff' } as React.CSSProperties}
            >
              <div
                className="inner"
                style={
                  {
                    '--category-inner-color': color ? color : '#000000'
                  } as React.CSSProperties
                }
              >
                &nbsp;
              </div>
            </div>
            {showColor ? (
              <div style={{ position: 'absolute', marginTop: -15, zIndex: 5 }}>
                <ChromePicker
                  color={color}
                  onChange={(val) => {
                    setCategory({ ...category, ...{ color: val.hex } });
                  }}
                />
              </div>
            ) : (
              ''
            )}

            <Text>Title</Text>
            <Input
              width={'100%'}
              value={title}
              onChange={(e) =>
                setCategory({ ...category, ...{ title: e.target.value } })
              }
            />
            <Text>Description</Text>
            <Textarea
              width={'100%'}
              value={description}
              onChange={(e) =>
                setCategory({ ...category, ...{ description: e.target.value } })
              }
            />
            <Spacer />
            <Text>Moderators</Text>
            <Select
              placeholder="Choose one or more"
              multiple
              value={moderator}
              width={'100%'}
              onChange={(val) => setCategory({ ...category, moderator: val })}
            >
              {users.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
            <Text>
              <Toggle
                type="secondary"
                checked={authRequired}
                onChange={(e) =>
                  setCategory({
                    ...category,
                    ...{ authRequired: e.target.checked }
                  })
                }
                mb={'5px'}
              />
              <Text small> &nbsp;Authentication required</Text>
            </Text>
            <Button
              loading={loading}
              type="secondary-light"
              width="100%"
              onClick={save}
            >
              Save
            </Button>
          </div>
        </main>
      </div>
    </Auth>
  );
});

export default EditCategory;
