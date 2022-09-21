import { Badge, Modal, Text, Select, Spacer, Divider } from '@geist-ui/core';
import { userProp } from 'interfaces/user';
import moment from 'moment';

type userModalProps = {
  loading: boolean;
  show: boolean;
  data: userProp;
  toggleModal: () => void;
  actionTrigger: (value: any) => void;
};

const UserModal = (props: userModalProps) => {
  const { loading, show, data, toggleModal, actionTrigger } = props;
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
          <Text>Username: @{data.username}</Text>
          <Text>Email: {data.email}</Text>
          <Text>Role: {data.role}</Text>
          <Text>
            Date joined: {moment(data.createdAt).format('MMM D, YYYY')}
          </Text>
          Status:{' '}
          {data.status === 'active' ? (
            <Badge type="success">{data.status}</Badge>
          ) : (
            <Badge type="error">{data.status}</Badge>
          )}
          <Spacer />
          <Divider>Actions</Divider>
          <Spacer />
          <div className="column">
            <div className="item">Change status: </div>
            <div className="item">
              <Select
                placeholder="Choose one"
                value={data.status}
                onChange={(value) => actionTrigger({ ...data, status: value })}
              >
                <Select.Option value="active">Active</Select.Option>
                <Select.Option value="banned">Banned</Select.Option>
                <Select.Option value="pending">Disabled</Select.Option>
              </Select>
            </div>
          </div>
          <div className="column">
            <div className="item">Change role: </div>
            <div className="item">
              <Select
                placeholder="Choose one"
                value={data.role}
                onChange={(value) => actionTrigger({ ...data, role: value })}
              >
                <Select.Option value="member">Member</Select.Option>
                <Select.Option value="moderator">Moderator</Select.Option>
                <Select.Option value="admin">Admin</Select.Option>
              </Select>
            </div>
          </div>
        </Modal.Content>
        <Modal.Action loading={loading} passive onClick={toggleModal}>
          Close
        </Modal.Action>
      </Modal>
    </>
  );
};

export default UserModal;
