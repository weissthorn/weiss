import { Badge, Modal, Text, Select, Spacer, Divider } from '@geist-ui/core';
import { userProp } from 'interfaces/user';
import moment from 'moment';
import { useTranslation, Translation } from 'components/intl/Translation';

type userModalProps = {
  loading: boolean;
  show: boolean;
  lang: string;
  data: userProp;
  toggleModal: () => void;
  actionTrigger: (value: any) => void;
};

const UserModal = (props: userModalProps) => {
  const { loading, show, lang, data, toggleModal, actionTrigger } = props;
  return (
    <>
      <Modal
        disableBackdropClick={show}
        className="modal"
        visible={show}
        onClose={toggleModal}
      >
        <Modal.Content>
          <Text h3 className="capitalize">
            {data.name}
          </Text>
          <Text>
            <Translation lang={lang} value="Username" />: @{data.username}
          </Text>
          <Text>
            <Translation lang={lang} value="Email" />: {data.email}
          </Text>
          <Text>
            <Translation lang={lang} value="Role" />: {data.role}
          </Text>
          <Text>
            <Translation lang={lang} value="Date joined" />:{' '}
            {moment(data.createdAt).format('MMM D, YYYY')}
          </Text>
          <Translation lang={lang} value="Status" />:{' '}
          {data.status === 'active' ? (
            <Badge type="success">
              <Translation lang={lang} value="Active" />
            </Badge>
          ) : data.status === 'banned' ? (
            <Badge type="error">
              <Translation lang={lang} value="Banned" />
            </Badge>
          ) : data.status === 'pending' ? (
            <Badge type="warning">
              <Translation lang={lang} value="Disabled" />
            </Badge>
          ) : (
            ''
          )}
          <Spacer />
          <Divider>
            <Translation lang={lang} value="Action" />
          </Divider>
          <Spacer />
          <div className="column">
            <div className="item">
              <Translation lang={lang} value="Change status" />:{' '}
            </div>
            <div className="item">
              <Select
                placeholder="Choose one"
                value={data.status}
                onChange={(value) => actionTrigger({ ...data, status: value })}
              >
                <Select.Option value="active">
                  <Translation lang={lang} value="Active" />
                </Select.Option>
                <Select.Option value="banned">
                  <Translation lang={lang} value="Banned" />
                </Select.Option>
                <Select.Option value="pending">
                  <Translation lang={lang} value="Disabled" />
                </Select.Option>
              </Select>
            </div>
          </div>
          <div className="column">
            <div className="item">
              <Translation lang={lang} value="Change role" />:{' '}
            </div>
            <div className="item">
              <Select
                placeholder="Choose one"
                value={data.role}
                onChange={(value) => actionTrigger({ ...data, role: value })}
              >
                <Select.Option value="member">
                  <Translation lang={lang} value="Member" />
                </Select.Option>
                <Select.Option value="moderator">
                  <Translation lang={lang} value="Moderator" />
                </Select.Option>
                <Select.Option value="admin">
                  <Translation lang={lang} value="Admin" />
                </Select.Option>
              </Select>
            </div>
          </div>
        </Modal.Content>
        <Modal.Action loading={loading} passive onClick={toggleModal}>
          <Translation lang={lang} value="Close" />
        </Modal.Action>
      </Modal>
    </>
  );
};

export default UserModal;
