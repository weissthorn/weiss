import {
  Text,
  Popover,
  Link,
  User,
  Avatar,
  Button,
  Spacer
} from '@geist-ui/core';
import moment from 'moment';

type replyProp = {
  name: string;
  role: string;
  photo: string;
  content: string;
  date: Date;
};
const Reply = (props: replyProp) => {
  const { name, role, photo, content, date } = props;
  return (
    <div className="discussion">
      <div className="item first">
        <Popover
          trigger="hover"
          content={
            <div style={{ padding: '0 10px' }}>
              <Link color href="#">
                <User src={`/storage/${photo}`} name={name}>
                  <Text p>{role} - 20 coins</Text>
                </User>
              </Link>
            </div>
          }
        >
          <Avatar src={`/storage/${photo}`} w={2.3} h={2.3} />
        </Popover>
      </div>
      <div className="item">
        <Text h5>
          {name} &nbsp;
          <Text small>{moment(date).fromNow()}</Text>
        </Text>
        <Text>{content}</Text>
        <Button type="secondary" ghost auto scale={0.7} font={'14px'}>
          Correct answer
        </Button>
        <Spacer inline />
        <Link font={'14px'}>Like</Link>
        <Spacer inline />
        <Link font={'14px'}>Reply</Link>
      </div>
    </div>
  );
};

export default Reply;
