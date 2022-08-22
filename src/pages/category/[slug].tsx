import React, { useEffect, useState } from 'react';
import {
  Spacer,
  Text,
  User,
  Tabs,
  Pagination,
  Link,
  Button
} from '@geist-ui/core';
import { ChevronRightCircle, ChevronLeftCircle, Circle } from '@geist-ui/icons';
import { setCookie, parseCookies } from 'nookies';
import Navbar from 'components/Navbar';
import Post from 'components/Post';
import EditorModal from 'components/modals/EditorModal';
import Sidebar from 'components/Sidebar';

export default function Home() {
  const [modal, toggleModal] = useState(false);

  const categoryMenu = () => (
    <div style={{ padding: '0 10px' }}>
      <Link href="/" className="category-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="category-icon"
          style={{ fill: 'blue' }}
          viewBox="0 0 512 512"
        >
          <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
        </svg>{' '}
        &nbsp;&nbsp;<span style={{ color: 'blue' }}>Arts</span>
      </Link>
    </div>
  );

  const save = () => {};

  return (
    <div>
      <Navbar title="Home" description="Weiss - Home" />
      <div
        className="category-box"
        style={{
          background: 'blue'
        }}
      >
        <Text h4 my={0} style={{ textTransform: 'uppercase' }}>
          Movies
        </Text>
        <Text p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          asperiores
        </Text>
      </div>
      <div className="page-container">
        <Sidebar
          active="movies"
          button={
            <Button
              type="secondary"
              style={{ textTransform: 'unset' }}
              onClick={() => toggleModal(!modal)}
            >
              Start a Discussion
            </Button>
          }
          fluid
        />

        <main className="main with-right">
          <Tabs initialValue="html" hideDivider>
            <Tabs.Item label="Popular" value="html">
              {Array.from({ length: 20 }).map((i, key) => (
                <Post
                  key={key}
                  slug="/"
                  avatar="https://unix.bio/assets/avatar.png"
                  title="CSS is the language that we can use to style and lay out our
                  web content, as well as adding behavior like animation."
                  date={new Date()}
                />
              ))}
              <div className="pagination">
                <Pagination count={30} initialPage={1} limit={5}>
                  {' '}
                  <Pagination.Next>
                    <ChevronRightCircle />
                  </Pagination.Next>
                  <Pagination.Previous>
                    <ChevronLeftCircle />
                  </Pagination.Previous>
                </Pagination>
              </div>
            </Tabs.Item>
            <Tabs.Item label="Recents" value="css">
              {Array.from({ length: 20 }).map((i, key) => (
                <Post
                  key={key}
                  slug="/"
                  avatar="https://unix.bio/assets/avatar.png"
                  title="text-overflow:ellipsis; only works when the following are true: The element's width must be constrained in px (pixels)."
                  date={new Date()}
                />
              ))}
            </Tabs.Item>
            <Tabs.Item label="Unanswered" value="js">
              {Array.from({ length: 20 }).map((i, key) => (
                <Post
                  key={key}
                  slug="/"
                  avatar="https://unix.bio/assets/avatar.png"
                  title="We step into the summer 🌅 with another release. Version 1.4 follows within two months of 1.3 to tackle a wide range of bugs and improve extensibility. Many of these improvements are purely internal focused at core, but cascade into the ecosystem through bundled and community extensions."
                  date={new Date()}
                />
              ))}
            </Tabs.Item>
          </Tabs>
        </main>
        <aside>
          <div className="sidenav fluid">
            <Text h3>Top Contributors</Text>
            <Link href="/">
              <User
                src="https://unix.bio/assets/avatar.png"
                name="Witt Cambridge"
              >
                <Text small>294 Discussions &nbsp;- 23 Replies</Text>
              </User>
            </Link>
            <Link href="/">
              <User
                src="https://unix.bio/assets/avatar.png"
                name="Witt Cambridge"
              >
                <Text small>294 Discussions &nbsp;- 23 Replies</Text>
              </User>
            </Link>
          </div>
        </aside>
        <EditorModal
          show={modal}
          toggleModal={() => toggleModal(!modal)}
          save={save}
        />
      </div>
    </div>
  );
}
