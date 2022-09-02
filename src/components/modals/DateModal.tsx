import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Modal, Text } from '@geist-ui/core';
import { DateRangePicker } from 'react-date-range';

type dateModalProps = {
  show: boolean;
  date: any;
  toggleModal?: () => void;
  setDate?: (value: any) => void;
  actionTrigger?: () => void;
};

const DateModal = (props: dateModalProps) => {
  const { show, date, toggleModal, setDate, actionTrigger } = props;

  return (
    <>
      <Modal
        width={'650px'}
        className="modal"
        visible={show}
        disableBackdropClick={true}
        onClose={toggleModal}
      >
        <Modal.Content>
          <DateRangePicker
            onChange={(item: any) => setDate([item.selection])}
            // showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={date}
            direction="horizontal"
          />
        </Modal.Content>
        <Modal.Action passive onClick={toggleModal}>
          Close
        </Modal.Action>
        <Modal.Action onClick={actionTrigger}>
          <Text b>Apply Filter</Text>
        </Modal.Action>
      </Modal>
    </>
  );
};

export default DateModal;
