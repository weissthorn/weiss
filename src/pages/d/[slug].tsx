import React, { useEffect, useState } from 'react';
import {
  Text,
  Popover,
  Link,
  User,
  Avatar,
  Button,
  ButtonDropdown,
  Spacer,
  Image,
  Loading
} from '@geist-ui/core';
import moment from 'moment';
import { ChevronDown, Facebook, Twitter, Mail } from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Navbar from 'components/Navbar';
import EditorModal from 'components/modals/EditorModal';
import useToken from 'components/Token';
import DiscussionStore from 'stores/discussion';
import { pluralize } from 'components/api/utils';
import Reply from 'components/Reply';

const Discussion = observer(() => {
  const token = useToken();
  const router = useRouter();
  const { slug } = router.query;
  const [
    { loading, commentLoading, discussion, comments, getDiscussion, getReplies }
  ] = useState(() => new DiscussionStore());

  const { profile, category } = discussion;

  useEffect(() => {
    router.isReady
      ? getDiscussion(slug).then((id) => {
          getReplies(id);
        })
      : null;
  }, [router]);

  return (
    <div>
      <Navbar title={discussion.title} description={discussion.title} />

      <div className="page-container top-100">
        <div className="discussion-container">
          <div className="item">
            <Text h2>{discussion.title} </Text>
            <Link href={`/category/${category?.slug}`}>
              {category?.title}
            </Link>{' '}
            - <Link>Edit discussion</Link> - <Link>Report</Link>
            <span style={{ float: 'right' }}>
              <ButtonDropdown type="secondary" scale={0.5} w={'50px'}>
                <ButtonDropdown.Item main>Share</ButtonDropdown.Item>
                <ButtonDropdown.Item>
                  <Twitter size={15} color="#1D9BF0" />
                  &nbsp; Tweet
                </ButtonDropdown.Item>
                <ButtonDropdown.Item>
                  <Facebook size={15} color="#0D90F4" /> &nbsp; Share
                </ButtonDropdown.Item>
                <ButtonDropdown.Item>
                  <Mail size={15} color="#999" /> &nbsp; Email
                </ButtonDropdown.Item>
              </ButtonDropdown>
            </span>
            <div className="discussion">
              <div className="item first">
                <Popover
                  trigger="hover"
                  content={
                    <div style={{ padding: '0 10px' }}>
                      <Link color href="#">
                        <User
                          src={`/storage/${profile?.photo}`}
                          name={profile?.name}
                        >
                          <Text p>
                            <span className="capitalize">{profile?.role}</span>{' '}
                            - {profile?.coin} coin
                            {pluralize(profile?.coin!)}
                          </Text>
                        </User>
                      </Link>
                    </div>
                  }
                >
                  <Avatar src={`/storage/${profile?.photo}`} w={2.3} h={2.3} />
                </Popover>
              </div>
              <div className="item">
                <Text h5>
                  {profile?.name} &nbsp;
                  <Text small>{moment(new Date()).fromNow()}</Text>
                </Text>
                <div
                  dangerouslySetInnerHTML={{ __html: discussion.content! }}
                ></div>

                <Link font={'14px'}>Like</Link>
                <Spacer inline />
                <Link font={'14px'}>Reply</Link>
              </div>
            </div>
            {commentLoading ? <Loading>Loading Replies</Loading> : ''}
            {comments.map((item) => (
              <Reply
                name="Wott"
                role="Moderator"
                photo={'avatar.png'}
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo tempora, iure adipisci magni voluptate eius itaque ex
                    nobis in. Ipsum totam quidem eveniet perspiciatis libero
                    sapiente eius placeat incidunt sunt?"
                date={new Date()}
              />
            ))}
            {Array.from({ length: 10 }).map((i, k) => (
              <Reply
                key={k}
                name="Wott"
                role="Moderator"
                photo={'avatar.png'}
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo tempora, iure adipisci magni voluptate eius itaque ex
                    nobis in. Ipsum totam quidem eveniet perspiciatis libero
                    sapiente eius placeat incidunt sunt?"
                date={new Date()}
              />
            ))}
            <Spacer />
            <div className="pagination">
              <Button type="abort" iconRight={<ChevronDown />}>
                Load more
              </Button>
            </div>
          </div>
          <div className="item">
            <aside>
              <div className="sidenav">
                <Text h3>Recommend Discussions</Text>
                <Link href="/" className="post-link">
                  Life is good but sweet sorrow.
                </Link>
                <Link href="/" className="post-link">
                  Life is good but sweet sorrow sh shdb sh fhsbd shbfbshdh.
                </Link>

                <Image
                  src="https://image.adsoftheworld.com/5d8cynqohu8hwrupvbllbn2t95zb"
                  width={'100%'}
                />
              </div>
            </aside>
          </div>
        </div>

        {/* <EditorModal show={false} /> */}
      </div>
    </div>
  );
});

export default Discussion;
